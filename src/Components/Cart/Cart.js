import { Card, Row, Col, Button, Space, Empty, Typography } from "antd";
import { useEffect, useState } from "react";
import { DeleteFilled, ShoppingCartOutlined } from "@ant-design/icons";
// import image1 from "../../assets/01.svg";
import "./CartStyle/firstSection.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  deleteProductFromCart,
  getUserAddress,
  getUserCartList,
  updateProductFromCart,
} from "../../api/user";
import { updateCartItem } from "../../Redux/actionTypes";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const CartDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [addressList, setAddressList] = useState([]);

  const incrementQuantity = (productDetails) => {
    const productDetailsAndCount = {
      product_id: productDetails.product_id,
      count: 1,
    };
    addProductToCart(productDetailsAndCount).then((response) => {
      getUserCartList().then((response) => {
        console.log(response);
        dispatch(updateCartItem(response));
      });
    });
  };
  const onCheckoutButtonClicked = () => {
    if (addressList.length) {
      navigate("/checkout/payment");
    } else {
      navigate("/checkout/shipping");
    }
  };
  const deleteItemFromCart = async (productDetails) => {
    const productidObj = {
      id: productDetails.id,
    };
    await deleteProductFromCart(productidObj);
    getUserCartList().then((response) => {
      dispatch(updateCartItem(response));
    });
  };
  const decrementQuantity = async (productDetails) => {
    if (productDetails.count > 1) {
      const payload = {
        id: productDetails.id,
        count: productDetails.count - 1,
      };
      await updateProductFromCart(payload);
      getUserCartList().then((response) => {
        dispatch(updateCartItem(response));
      });
    }
  };
  const getTotalAmount = (cartItems) => {
    let totalAmount = 0;
    if (cartItems?.length) {
      cartItems.forEach((item) => {
        totalAmount += item.sellingPrice * item.count;
      });
    }
    setTotalAmount(totalAmount);
  };
  const getAndStoreUserAddress = async () => {
    const addressList = await getUserAddress();
    setAddressList(addressList);
    console.log(addressList);
  };
  useEffect(() => {
    getAndStoreUserAddress();
  }, []);
  useEffect(() => {
    getTotalAmount(cartItems);
  }, [cartItems]);

  return (
    <>
      <section className="first pb-40">
        <Row type="flex" justify="center" align="middle">
          <Col span={10} style={{ alignItems: "center" }}>
            <b className="title">Your cart</b>
          </Col>
          <Col
            span={10}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={"/products"}>
              <b className="continue">Continue shopping</b>
            </Link>
          </Col>
        </Row>
        {cartItems?.length ? (
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginTop: "20px" }}
          >
            <Col span={12} style={{ alignItems: "center" }}>
              <p className="bold">Product Title</p>
            </Col>
            <Col
              span={4}
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <p className="bold">Quantity</p>
            </Col>
            <Col
              span={4}
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <p className="bold">Total</p>
            </Col>
          </Row>
        ) : (
          <></>
        )}
        {cartItems?.length ? (
          cartItems.map((item) => {
            const {
              size,
              productFeature,
              name,
              discount,
              sellingPrice,
              productCode,
              color,
              count,
              productPrice,
              productImages,
            } = item;
            return (
              <Card>
              <Row type="flex" justify="center" align="top" style={{marginBottom: "10px"}}>
                <Col span={12}>
                  <Row>
                    <Col xs={24} sm={8}>
                      <div
                        className="width"
                        style={{ height: "208px", justifyContent: "left" }}
                      >
                        <img src={productImages} alt="Product" />
                      </div>
                    </Col>
                    <Col xs={24} sm={16}>
                      <div>
                        <p>
                          <span
                            style={{
                              fontSize: "30px",
                              fontWeight: "bold",
                              "@media (max-width: 768px)": {
                                fontSize: "24px",
                              },
                            }}
                          >
                            {item.name}
                          </span>
                        </p>
                        <div>
                          <div>
                            <Text className="third-card-price" delete>
                              ₹{productPrice}
                            </Text>
                            <Text className="third-card-price">
                              {" "}
                              - {discount}%
                            </Text>
                          </div>
                          <div>
                            <Text
                              className="third-card-price"
                              style={{ color: "green" }}
                            >
                              ₹{sellingPrice}
                            </Text>
                          </div>
                        </div>
                        <p
                          style={{
                            color: "gray",
                            "@media (max-width: 768px)": { fontSize: "12px" },
                          }}
                        >
                          Color: {color}
                          <br />
                          Style: Modern
                          <br />
                          Brand: 0000
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  span={4}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Space>
                    <Button
                      onClick={() => decrementQuantity(item)}
                      className="bold"
                    >
                      -
                    </Button>
                    <span className="bold">{count}</span>
                    <Button
                      onClick={() => incrementQuantity(item)}
                      className="bold"
                    >
                      +
                    </Button>

                    <Button
                      className="bold"
                      style={{ width: "24px", border: "none" }}
                      onClick={() => deleteItemFromCart(item)}
                    >
                      <DeleteFilled />
                    </Button>
                  </Space>
                </Col>
                <Col
                  span={4}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Space>
                    <span className="bold">Rs {sellingPrice * count}</span>
                  </Space>
                </Col>
              </Row>
              </Card>
            );
          })
        ) : (
          <Empty
            image={<ShoppingCartOutlined style={{ fontSize: 100 }} />}
            imageStyle={{
              height: 100,
            }}
            description={
              <Space direction="vertical">
                <span>Your cart is empty</span>
                {/* Add additional message or content here */}
              </Space>
            }
          />
        )}
        {cartItems?.length ? (
          <Row type="flex" justify="center" className="pt">
            <Col span={10}>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
                className="bottom-border "
              >
                <span className="bold">Discount Code</span>
                <span
                  className="bold"
                  style={{ color: #04b2a9, textDecoration: "underline" }}
                >
                  Apply
                </span>
              </div> */}
            </Col>
            <Col span={10} className="width">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "80%",
                }}
              >
                <div className="bold">Subtotal: Rs.{totalAmount}</div>
              </div>
              <div
                style={{
                  color: "gray",
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "80%",
                }}
              >
                Taxes and shipping calculated at checkout
              </div>
              <Row className="pt-40 ">
                <Col span={12}></Col>
                <Col span={12} className="pr-20">
                  <Button
                    className="bold checkout"
                    onClick={() => onCheckoutButtonClicked()}
                  >
                    Checkout
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default CartDetail;
