import React from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';
//@ts-ignore
import vector1 from "../../assets/images/Vector1.svg"
//@ts-ignore
import vector2 from "../../assets/images/vector32.svg"
import './layoutStyle/productOfferBanner.css';

const { Text } = Typography;

interface ProductOfferBannerProps {
  height?: number;
  title: string;
  description: string;
  buttonText: string;
}

const ProductOfferBanner: React.FC<ProductOfferBannerProps> = ({
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
