import React from "react";
import { Row, Col, Typography, Rate, Button, Carousel } from "antd";
import "./productdetailStyle/firstSection.css";
import image1 from "../../assets/01.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {updateCartItem, incrementCartCount} from "../../Redux/actionTypes"
import { useDispatch } from 'react-redux';
import { addProductToCart, getUserCartList } from "../../api/user";
const { Text } = Typography;
const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
};

const FirstSection = ({ productData }) => {
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
    }
    // dispatch(updateCartItem(itemDetails)); // Dispatch action to add item to cart
  };
  // Destructuring values from productData
  const {
    size,
    updateAt,
    countryOfOrigin,
    emailId,
    productFeature,
    name,
    discount,
    ratings,
    sellingPrice,
    productCode,
    careInstruction,
    id,
    color,
    quantity,
    department,
    includedComponents,
    productDimension,
    createdAt,
    productDescription,
    itemWeight,
    isPublished,
    packedBy,
    productPrice,
    material,
    productImages,
  } = productData;
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const carouselRef = React.createRef();

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Row gutter={16} type="flex" justify="center" align="middle">
      <Col xs={24} sm={24} md={12} lg={10}>
        <Row gutter={16} justify="center">
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="left-arrow-alignment"
            onClick={handlePrev}
          >
            <LeftOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
          </Col>
          <Col xs={16} sm={16} md={16} lg={16}>
            <div className="left-div-border">
              <Carousel ref={carouselRef} afterChange={onChange} dots={false}>
                <div className="image-alignment">
                  <img
                    src={productImages}
                    alt={name}
                    style={{ width: "346px", height: "440px", ...contentStyle }}
                  />
                </div>
                <div className="image-alignment">
                  <img
                    src={productImages}
                    alt={name}
                    style={{ width: "346px", height: "440px", ...contentStyle }}
                  />
                </div>
                <div className="image-alignment">
                  <img
                    src={productImages}
                    alt={name}
                    style={{ width: "346px", height: "440px", ...contentStyle }}
                  />
                </div>
                <div className="image-alignment">
                  <img
                    src={image1}
                    alt={name}
                    style={{ width: "346px", height: "440px", ...contentStyle }}
                  />
                </div>
              </Carousel>
            </div>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="right-arrow-alignment"
            onClick={handleNext}
          >
            <RightOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
          </Col>
        </Row>
      </Col>
      <Col xs={22} sm={22} md={12} lg={14}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="heading-style">{name}</div>
            <p className="heading-desc">{productDescription?.slice(0, 256)}</p>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div>
              <Rate
                value={ratings}
                style={{
                  fontSize: 18,
                  color: "gold",
                  marginRight: "16px",
                  paddingTop: "10px",
                }}
              />
              <span
                style={{ color: "gray" }}
              >{`(${0} Reviews)`}</span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
          <div>
          <div>
            <Text className="third-card-price" style={{marginRight: '10px'}}>
              M.R.P.:
            </Text>
            <Text className="cost" delete>
              ₹{productPrice}
            </Text>
            <Text className="third-card-price"> - {discount}%</Text>
          </div>
          <div>
            <Text className="cost" style={{ color: "green" }}>
              ₹{sellingPrice}
            </Text>
          </div>
        </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div style={{ marginTop: "60px" }}>
              <Button className="custom-button" style={{ marginRight: "12px" }} onClick={() => handleAddToCart(productData)}>
                Add to Cart
              </Button>
              <Button className="custom-button2">Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FirstSection;