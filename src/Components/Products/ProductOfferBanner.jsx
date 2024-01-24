import React from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';
//@ts-ignore
import vector1 from "../../assets/productListBanner.svg"
//@ts-ignore
import vector2 from "../../assets/productListBanner.svg"
import './style/productOfferBanner.css';

const { Text } = Typography;

const ProductOfferBanner = ({
  height,
  title,
  description,
  buttonText,
}) => {
  return (
    <Row className="product-offer-banner" style={{ height: height ? height : '' }}>
      <Col xs={24} md={14} lg={14} className="product-offer-banner-left">
        <Col className="product-offer-banner-content">
          <Text className="product-offer-banner-title">{title}</Text>
          <Text className="product-offer-banner-description">{description}</Text>
          <Button className="product-offer-banner-explore-btn">{buttonText}</Button>
        </Col>
      </Col>

      <Col xs={24} md={10} lg={10} className="product-offer-banner-right">
        <Image src={vector2} className="product-offer-banner-vector2" preview={false} />
      </Col>
    </Row>
  );
};

export default ProductOfferBanner;
