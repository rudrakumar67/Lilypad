import React from "react";
import { Row, Col } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";

const stickyCss = {
  position: "sticky",
  top: "0px",
  "z-index": "100"
}
const AppLayout = ({ Component }) => {
  return (
    <Row>

      <Col span={24} style={stickyCss}>
        <Navbar />
      </Col>
      <Col span={24}>
        <Component />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default AppLayout;