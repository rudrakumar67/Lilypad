import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";
import ShippingSection from "../Components/CheckOut/ShippingSection";
import OrderSummary from "../Components/CheckOut/OrderSummary";
import { useNavigate } from "react-router-dom";

const ShippingSectionPage = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [form] = useForm();
  form.setFieldsValue({
    contact: userDetails.mobile || userDetails.email,
  });
  const navigate = useNavigate();
  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(localStorage.getItem("otpless_user_token"));

    if (!otpless_user_token) {
      navigate("/products");
    } 
  }
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  return (
    <>
      <Row gutter={16} type="flex" justify="center" align="middle">
        <ShippingSection />
        <OrderSummary />
      </Row>
    </>
  );
};

export default ShippingSectionPage;
