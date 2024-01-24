import React from "react";
import { Row, Col, Typography, Button, Card, Image } from "antd";
//@ts-ignore
import Meta from "antd/es/card/Meta";
import "./homeStyle/thirdSection.css";
import { addProductToCart } from "../../api/user";

const { Text } = Typography;

const ThirdSection = () => {
  const handleAddToCart = async () => {
    try {
      const itemData = {
        product_id: "58472f42-1fa9-40fd-bb42-c32ae3e86820",
        user_id: "user-1",
        count: 5,
      };
      const response = await addProductToCart(itemData);

      console.log("Item added to cart:", response);
    } catch (error: any) {
      console.error("Error adding item to cart:", (error as Error).message);
    }
  };

  return (
    <Row className="third-section-container">
      <Col xs={24} md={12} lg={10} className="third-left-container">
        <Col className="third-left-sub-container">
          <Text className="third-title">Most Viewed Products</Text>
          <Text className="third-description">
            Making the right choice begins with exploring what's popular and
            trusted by fellow enthusiasts. Here are the hottest picks, the crowd
            favorites, and the top choices that have captured the attention of
            our community
          </Text>
          <Button className="third-view-all-btn">View All</Button>
        </Col>
      </Col>

      <Col xs={24} md={6} lg={7} className="third-right-container">
        <Card hoverable className="third-card">
          <Col span={24} className="third-card-img-container">
            <Image
              className="third-card-img"
              alt="example"
              width={200}
              src="/images/products/scooter.png"
              preview={false}
            />
          </Col>
          <Col span={24} className="card-details-container">
            <Text className="third-card-title">2w electric scooters</Text>
            <Text className="third-card-price">₹62,231.00</Text>
            <Button className="third-view-all-btn" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </Col>
        </Card>
      </Col>

      <Col xs={24} md={6} lg={7} className="third-right-container">
        <Card hoverable className="third-card">
          <Col span={24} className="third-card-img-container">
            <Image
              className="third-card-img"
              alt="example"
              width={200}
              src="/images/products/cycle.png"
              preview={false}
            />
          </Col>
          <Col span={24} className="card-details-container">
            <Text className="third-card-title">E-Bicycles</Text>
            <Text className="third-card-price">₹10,231.00</Text>
            <Button className="third-view-all-btn" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default ThirdSection;
