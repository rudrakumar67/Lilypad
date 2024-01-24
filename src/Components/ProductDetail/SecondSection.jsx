import React from "react";
import "./productdetailStyle/secondSections.css";
import { Col, Row, Tabs } from "antd";
import ProductDetailReview from "./ProductReview";

const SecondSection = ({ productData }) => {
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
  } = productData;
  const items = [
    {
      key: "1",
      label: "Description",
      children: (
        <div style={{ paddingTop: "20px", fontWeight: 400 }}>
          {productDescription}
        </div>
      ),
    },
    {
      key: "2",
      label: "Other Details",
      children: (
        <>
          <div style={{ paddingTop: "20px", fontWeight: 600 }}>
            <div>Specifications:</div>
            <div style={{  fontWeight: 300 }}>
            <ul style={{listStyleType: "disc", paddingLeft: "20px" }}>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", }}>
              <span style={{ flex: 1}}>Brand</span>
                <span style={{ flex: 1 }}>{name}</span>
              </li>
              
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Model Name</span>
                <span style={{ flex: 1 }}>QOQO Watch AmoLite</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Style</span>
                <span style={{ flex: 1 }}>QOQO Watch AmoLite</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Colour</span>
                <span style={{ flex: 1 }}>{color}</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Screen Size</span>
                <span style={{ flex: 1 }}>1.96 inch Large AMOLED Display</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Item Weight</span>
                <span style={{ flex: 1 }}>{itemWeight}</span>
              </li>
              
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Product dimensions L*B*H</span>
                <span style={{ flex: 1 }}>{productDimension}</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Country of Origin</span>
                <span style={{ flex: 1 }}>{countryOfOrigin}</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ flex: 1}}>Department</span>
                <span style={{ flex: 1 }}>{department}</span>
              </li>
            </ul>
           </div>
          </div>
          <div style={{ paddingTop: "20px", fontWeight: 600 }}>
            <div>What is in the box?</div>
            <div style={{  fontWeight: 300 }}>
              
              <ul>
              <li className="li-alignment">{careInstruction}</li>
            </ul>
            </div>
          </div>
          
        </>
      ),
    },
    {
      key: "3",
      label: "Review",
      children: (
        <>
        <div style={{ paddingTop: "20px", fontWeight: 600 }}>
            <div style={{ paddingTop: "20px", fontWeight: 300 }}>
              {'review section'}
            </div>
          </div>
        
          <ProductDetailReview/>
        </>
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Row gutter={20} type="flex" justify="center" align="middle">
        <Col xs={22} sm={22} md={22} lg={22}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Col>
      </Row>
    </>
  );
};

export default SecondSection;