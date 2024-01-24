import { Col, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(50);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const getTotalAmount = (cartItems) => {
    let totalAmount = 0;
    if (cartItems.length) {
      cartItems.forEach((item) => {
        totalAmount += item.sellingPrice * item.count;
      });
    }
    setTotalAmount(totalAmount);
    if (totalAmount >= 5000) {
      setShippingCharge(0);
    } else {
      setShippingCharge(50);
    }
  };
  useEffect(() => {
    getTotalAmount(cartItems);
  }, [cartItems]);
  return (
    <Col xs={24} sm={24} md={12}>
      <div style={{ padding: "0 20px" }}>
        <Typography
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          Total amount
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            color: "#04B2A9",
            fontSize: "40px",
            fontWeight: "bolder",
          }}
        >
          Rs.{totalAmount}
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            color: "gray",
            paddingBottom: "40px",
            borderBottom: "1px solid #ccc", // Adding bottom border
            marginBottom: "30px",
          }}
        >
          <LockOutlined style={{ color: "green", marginRight: "2px" }} />
          Secure Payment
        </Typography>
        {/* Add your product details here */}
        <Typography style={{ color: "gray", fontSize: "18px" }}>
          Order Summary
        </Typography>
        <div style={{borderBottom: "1px solid #ccc", marginTop: "20px", paddingBottom: "20px"}}>
        {cartItems?.length ? (
          cartItems.map((item) => (
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div><span style={{ textAlign: "left" }}>{item.name}</span> <span style={{color: 'gray', fontWeight: 'normal', fontSize: "16px",}}>{item.count ? `x${item.count}` : ""}</span></div>
              <span style={{ textAlign: "right" }}>Rs.{item.sellingPrice * item.count}</span>
            </Typography>
          ))
        ) : (
          <></>
        )}
        </div>
        <Typography
          style={{
            marginTop: "20px",
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ textAlign: "left", color: "gray", fontSize: "20px" }}>
            Subtotal
          </span>
          <span style={{ textAlign: "right", fontWeight: "bold" }}>
            Rs.{totalAmount}
          </span>
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "40px",
            borderBottom: "1px solid #ccc", // Adding bottom border
            marginBottom: "30px",
          }}
        >
          <span style={{ textAlign: "left", color: "gray", fontSize: "20px" }}>
            Shipping
          </span>
          <span style={{ textAlign: "right", fontWeight: "bold" }}>
            {shippingCharge > 0 ? "Rs."+ shippingCharge : "Free"}
          </span>
        </Typography>

        <Typography
          style={{
            marginTop: "20px",
            fontSize: "25px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ textAlign: "left", fontSize: "20px" }}>Total</span>
          <span
            style={{
              textAlign: "right",

              color: "#04B2A9",
              fontSize: "35px",
            }}
          >
            Rs.{totalAmount + shippingCharge}
          </span>
        </Typography>
      </div>
    </Col>
  );
};

export default OrderSummary;
