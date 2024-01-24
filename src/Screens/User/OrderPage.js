import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Upload,
  Row,
  Rate,
  Select,
  Space,
  Typography,
  DatePicker,
  Layout,
  Input,
} from "antd";
import { Card } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../api/order";
import { formatDate } from "../../utils/data-time";
import { createReview } from "../../api/product";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const [showReview, setShowReview] = useState({});
  const handleShowReviewButtonClick = (id) => {
    setShowReview((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };
  const handleFormSubmit = (values, productId) => {
    const payload = {
      ...values,
      productId
    }
    createReview(payload).then((response) => {
      console.log("review added: ", response);
    })
    console.log(`Form ${productId} values:`, values);
    // Process form values based on itemId
  };

  const layoutStyle = {
    // backgroundColor: "#fff",
  };
  const gray = {
    color: "gray",
  };
  const borderBottomStyle = {
    borderBottom: "1px solid #ccc",
    paddingBottom: "28px",
    marginBottom: "28px",
  };
  const handleReviewClick = () => {
    setShowReview(!showReview);
  };
  const handleViewItemClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  const navigate = useNavigate();
  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(
      localStorage.getItem("otpless_user_token")
    );

    if (!otpless_user_token) {
      navigate("/eStore");
    }
  };
  const fetchOrders = async () => {
    const orders = await getOrders();
    if (orders) {
      console.log("myAllOrders", orders);
      setOrders(orders);
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
    fetchOrders();
  }, []);

  return (
    <Layout style={layoutStyle}>
      {orders.length > 0 && (
        <Typography style={{}}>{`${orders.length} Order${
          orders.length > 1 ? "s" : ""
        } Placed`}</Typography>
      )}

      {orders.map((order, index1) => {
        return (
          <>
            {order["order_items"]?.map((orderItem, index2) => {
              const formKey = `form${index1}${index2}`
              return (
                <Card
                  key={`${index1}${index2}`}
                  style={{
                    margin: "20px",
                  }}
                >
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col span={8}>
                          <span style={gray}>ORDER PLACED</span>
                          <br />
                          {formatDate(order.createdAt)}
                        </Col>
                        <Col span={8}>
                          <span style={gray}>TOTAL</span>
                          <br />
                          <span>₹{orderItem.sellingPrice}</span>
                        </Col>
                        <Col span={8}>
                          <span style={gray}>SHIP TO</span>
                          <br />
                          {order?.address?.firstName +
                            " " +
                            order?.address?.lastName}
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      span={12}
                      style={{ textAlign: "right", color: "gray" }}
                    >
                      ORDER # {order.id}
                    </Col>
                  </Row>
                  <Typography style={borderBottomStyle}></Typography>
                  <Row>
                    <Col span={12}>
                      <Row type="flex" justify="center" align="top">
                        <Col span={8} style={{ textAlign: "center" }}>
                          <img
                            src={orderItem.productImages}
                            alt={orderItem.name}
                            style={{ width: "90px", height: "81px" }}
                          />
                        </Col>
                        <Col span={16}>
                          <Typography style={{ fontSize: "25px" }}>
                            {orderItem.name}
                          </Typography>
                          <br />
                          <Button
                            onClick={() =>
                              handleViewItemClick(orderItem.product_id)
                            }
                          >
                            View Item
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      span={12}
                      style={{
                        textAlign: "right",
                        color: "gray",
                        paddingRight: "20px",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {order.status} {order.deliveryDate}
                      </span>
                      <br />
                      {order.deliveryDetails} <br /> <br />
                      <Button
                        onClick={() =>
                          handleShowReviewButtonClick(
                            orderItem.product_id + order.id
                          )
                        }
                      >
                        Write Review
                      </Button>
                    </Col>
                  </Row>
                  {showReview[orderItem.product_id + order.id] && (
                    <>
                      <Typography style={borderBottomStyle}></Typography>
                      <Form
                        key={formKey}
                        name="profile_form"
                        onFinish={(values) =>
                          handleFormSubmit(values, orderItem.product_id)
                        }
                        layout="vertical"
                      >
                        <Row gutter={32}>
                          <Col span={16}>
                            <Form.Item name="review">
                              <TextArea
                                placeholder="Write your review here"
                                rows={3}
                                style={{
                                  width: "100%",
                                  backgroundColor: "#F4F7FC",
                                  padding: "20px",
                                }}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="rating"
                              label="Overall Rating"
                            >
                              <Rate style={{ fontSize: 24 }} />
                            </Form.Item>
                            {/* <Typography>Img Upload</Typography><br/>
                        <Upload
                            listType="picture-card"
                            showUploadList={false}
                          
                          >
                            
                              <PlusOutlined  />
                          
                          </Upload> */}
                          </Col>
                        </Row>

                        <Form.Item style={{ paddingTop: "20px" }}>
                          <Button
                            type="primary"
                            onClick={() =>
                              handleShowReviewButtonClick(
                                orderItem.product_id + order.id
                              )
                            }
                            style={{
                              backgroundColor: "white",
                              color: "#04b2a9",
                              border: "1px solid red",
                              height: "50px",
                              width: "149px",
                            }}
                          >
                            Discard
                          </Button>
                          <Button
                            type="default"
                            htmlType="submit"
                            style={{
                              marginLeft: 16,
                              backgroundColor: "#04b2a9",
                              color: "white",
                              height: "50px",
                              width: "149px",
                            }}
                          >
                            Add Review
                          </Button>
                        </Form.Item>
                      </Form>
                    </>
                  )}
                </Card>
              );
            })}
          </>
        );
      })}
    </Layout>
  );
};

export default OrderPage;
