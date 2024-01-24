import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import PaymentSection from "../Components/CheckOut/PaymentSection";
import OrderSummary from "../Components/CheckOut/OrderSummary";
import { createOrder } from "../api/order";
import { useNavigate } from "react-router-dom";
import { deleteAllProductFromCart, getUserCartList } from "../api/user";
import OrderPlacedModal from "../modals/OrderPlacedModal";
import { updateCartItem } from "../Redux/actionTypes";
import ResponsiveFirstSection from "../Components/CheckOut/ResponsiveFirstSection";
import ResponsiveShippingSection from "../Components/CheckOut/ResponsiveShippingSection";

const ChosePaymentSection = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const onModalClose = () => {
    setIsModalOpen(false);
  }
  const onOrderPlace = (address, paymentMethod) => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    const payload = {
      address_id: address.id,
      order_items: cartItems,
      amount: totalAmount + shippingCharge,
      payment_mode: paymentMethod,
      status: "Placed",
      estimated_delivery_date: deliveryDate,
    };
    createOrder(payload).then(async (response) => {
      console.log(response);
      deleteAllProductFromCart().then(response => {
        getUserCartList().then((response) => {
          dispatch(updateCartItem(response));
          setIsModalOpen(true);
        });
      });
    });
    console.log(payload);
  };
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
  const navigate = useNavigate();
  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(localStorage.getItem("otpless_user_token"));

    if (!otpless_user_token) {
      navigate("/products");
    } 
  }
  useEffect(() => {
    // Event handler to update windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleReload = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("reload", handleReload);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("reload", handleReload);
    };
  }, [windowWidth]);
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  useEffect(() => {
    getTotalAmount(cartItems);
  }, [cartItems]);
  return (
    <>
    {
      windowWidth > 500 ? 
      <>
      <Row gutter={16} type="flex" justify="center" align="middle">
        <PaymentSection onOrderPlace={onOrderPlace} />
        <OrderSummary />
      </Row>
      </> :
      <>
      <Row gutter={16} type="flex" justify="center" align="middle">
        {/* here we need to add responsive screen */}
      <PaymentSection onOrderPlace={onOrderPlace} />
        <OrderSummary />
      </Row>
      </>
    }
      
      <OrderPlacedModal isModalOpen={isModalOpen} onModalClose={onModalClose} />
    </>
  );
};

export default ChosePaymentSection;
