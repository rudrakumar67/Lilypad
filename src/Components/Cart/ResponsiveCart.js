import { Card, Row, Col, Button, Space, Empty, Typography } from "antd";
import { useState } from "react";
import { DeleteFilled, ShoppingCartOutlined } from "@ant-design/icons";
import image1 from "../../assets/images/Vector5.svg";
import "./CartStyle/firstSection.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { Text } = Typography;

const ResponsiveCartDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section className="first-resp" style={{ width: "87%" }}>
        <Typography
          style={{
            border: "1px solid #E3E3E3",
            borderRadius: "10px",
            padding: "10px",
            width: "100%",
            backgroundColor: "	#F0F0F0",
          }}
        >
          <Row gutter={10}>
            <Col span={8}>
              <div
                className="width"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src={image1}
                  alt="Product"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </Col>
            <Col span={16}>
              <div style={{ paddingLeft: "8px" }}>
                <p>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {/* {item.name} */}
                    Mini Electric Scooter
                  </span>
                </p>
                <p
                  className="bold"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Rs.3999.00
                </p>
              </div>
              <Space style={{ paddingLeft: "10px" }}>
                <Button onClick={decrementQuantity} className="bold">
                  -
                </Button>
                <span className="bold">{quantity}</span>
                <Button onClick={incrementQuantity} className="bold">
                  +
                </Button>
              </Space>
            </Col>
          </Row>
        </Typography>
      </section>
      {/* checkout section start */}
      <section
        className="first pb-40"
        style={{
          position: "fixed",
          bottom: "0",
          width: "85%",

          zIndex: "999",
        }}
      >
        <Typography
          style={{
            border: "1px solid #04b2a9",
            borderRadius: "10px",
            padding: "15px",
            width: "100%",
            backgroundColor: "#FFE5DB",
          }}
        >
          <div
            style={{
              paddingBottom: "5px",
              fontSize: "14px",
            }}
          >
            <Text>Selected Item (1)</Text>
          </div>

          <div
            style={{
              paddingBottom: "3px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <Text strong style={{ color: "black", textAlign: "right" }}>
              Subtotal : Rs.12,236
            </Text>
          </div>
          <div
            style={{
              color: "gray",
            }}
          >
            Taxes and shipping calculated at checkout
          </div>
        </Typography>

        <div
          type="flex"
          justify="center"
          className="pt"
          style={{ width: "100%" }}
        >
          <Link to={"/checkout"}>
            <Button className="bold checkout">Checkout</Button>
          </Link>
        </div>

        <></>
      </section>
    </>
  );
};

export default ResponsiveCartDetail;
