import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";
import OrderSummary from "../Components/CheckOut/OrderSummary";
import UserAddressCard from "../Components/CheckOut/UserAddressCard";
import { getUserAddress } from "../api/user";
import { useNavigate } from "react-router-dom";

const UserAddressSection = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [addressList, setAddressList] = useState([]);
  const [form] = useForm();
  form.setFieldsValue({
    email: userDetails.email,
  });
  form.setFieldsValue({
    mobile: userDetails.mobile,
  });
  console.log("firstsectionchecckut", userDetails);
  const getAndStoreUserAddress = async () => {
    const addressList = await getUserAddress();
    setAddressList(addressList);
    console.log(addressList);
  };
  const navigate = useNavigate();

  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(localStorage.getItem("otpless_user_token"));
    if (!otpless_user_token) {
      navigate("/products");
    } 
  }
  useEffect(() => {
    checkUserLoggedIn();
    getAndStoreUserAddress();
  }, []);

  return (
    <>
      <Row gutter={16} type="flex" justify="center">
        <UserAddressCard
          addressList={addressList}
          onEdit={() => {
            // Add your edit functionality here
            console.log("Edit clicked");
          }}
          onDelete={() => {
            // Add your delete functionality here
            console.log("Delete clicked");
          }}
        />
        <OrderSummary />
      </Row>
    </>
  );
};

export default UserAddressSection;
