import React from "react";
import { Row, Col, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {} from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const UserLayoutPage = ({ Component }) => {
  return (
    <>
      <Row>
        <Col span={24} style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Navbar />
        </Col>        
        <Col span={24}>
          <Layout style={{ backgroundColor: "#FAFAFB" }}>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              style={{
                padding: "20px 0",
                background: "white",
                height: "100vh",
              }}
            >
              {/* <Logo /> */}
              <Sidebar />
            </Sider>
            <Layout style={{ backgroundColor: "#FAFAFB" }}>
              <Content style={{ margin: "1rem" }}>
                <Component />
              </Content>
            </Layout>
          </Layout>
        </Col>
        <Col span={24}>
        <Footer />
        </Col>
      </Row>
    </>
  );
};

export default UserLayoutPage;
