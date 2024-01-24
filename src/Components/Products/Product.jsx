import React, { useState } from "react";
import { Col, Typography, Image, Card, Button, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
//@ts-ignore
import vector5 from "../../assets/images/Vector5.svg";
import "./style/product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../Redux/actionTypes";
import { addProductToCart, getUserCartList } from "../../api/user";

const { Text } = Typography;

const Product = ({ product }) => {
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);
  const [isItemAddeToCart, setIsItemAddeToCart] = useState(false);
  const dispatch = useDispatch();
  const openLoginModal = () => {
    // createLogicPage();
    window.otplessInit();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };
  const handleAddToCart = (itemDetails) => {
    const otpless_user_token = JSON.parse(localStorage.getItem("otpless_user_token"));

    if (!otpless_user_token) {
      openLoginModal();
    } else {
      const productDetailsAndCount = {
        product_id: itemDetails.id,
        count: 1,
      };
      addProductToCart(productDetailsAndCount).then((response) => {
        getUserCartList().then((response) => {
          console.log(response);
          dispatch(updateCartItem(response));
        });
      });
      // dispatch(addToCart(productDetailsAndCount)); // Dispatch action to add item to cart
      setIsItemAddeToCart(true);
    }
  };

  const wishlistIconColor = isWishlistClicked ? "red" : "gray"; // Define the colors

  const handleWishlistClick = () => {
    setIsWishlistClicked(!isWishlistClicked); // Toggle the state
  };
  return (
    <Card
      hoverable
      className="third-card"
      style={{ minWidth: 225, margin: 10, position: "relative" }}
    >
      <Col span={24} className="third-card-img-container">
        <Link to={`/product/${product.id}`}>
          <Image
            className="third-card-img"
            alt="example"
            width={200}
            src={product.productImages || vector5}
            preview={false}
          />
        </Link>
        <HeartOutlined
          className="wishlist-icon"
          style={{
            fontSize: "24px",
            position: "absolute",
            top: "10px",
            right: "10px",
            color: wishlistIconColor,
          }}
          onClick={handleWishlistClick}
        />
      </Col>
      <Col span={24} className="card-details-container">
        <Text className="third-card-title">{product.productName}</Text>
        <Rate allowHalf disabled defaultValue={product.ratings || 1} />
        <div>
          <div>
            <Text className="third-card-price" delete>
              ₹{product.productPrice}
            </Text>
            <Text className="third-card-price"> - {0}%</Text>
          </div>
          <div>
            <Text className="third-card-price" style={{ color: "green" }}>
              ₹{product.productPrice}
            </Text>
          </div>
        </div>
        <Button
          className="third-view-all-btn"
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          {"Add to cart"}
        </Button>
      </Col>
    </Card>
  );
};

export default Product;
