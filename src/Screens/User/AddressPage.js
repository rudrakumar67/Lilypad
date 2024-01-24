import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { getUserAddress } from "../../api/user";
import { generateAddressString } from "../../utils/user";

const AddressPage = () => {
  const [addressList, setAddressList] = useState([]);

  const layoutStyle = {
    // padding: "10px 30px 10px 50px ",
  };
  const redTextButton = {
    color: "#04b2a9",

    border: "none",
    background: "none",
    outline: "none",
    cursor: "pointer",
  };
  const addressredTextButton = {
    color: "#04b2a9",
    textDecoration: "underline",
  };
  const navigate = useNavigate();
  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(
      localStorage.getItem("otpless_user_token")
    );

    if (!otpless_user_token) {
      navigate("/eStore");
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const getAndStoreUserAddress = async () => {
    const addressList = await getUserAddress();
    setAddressList(addressList);
    console.log(addressList);
  };
  useEffect(() => {
    getAndStoreUserAddress();
  }, []);

  return (
    <Layout style={layoutStyle}>
      <Row gutter={16}>
        {addressList.map((address) => (
          <Col span={8} xs={24} sm={24} md={12} lg={8} xl={8} key={address.id}>
            <Card bordered={false} style={{ marginBottom: "70px" }}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {address.name}
              </Typography>{" "}
              <br />
              {generateAddressString(address, false)}
              <br />
              <br />
              Phone : {address.contact}
              <br />
              Email : {address.email}
              <br />
              <br />
              <Row
                gutter={[16]}
                align="middle"
                style={{ marginBottom: "40px" }}
              >
                <Col>
                  <Button disabled style={redTextButton}>
                    Edit
                  </Button>
                </Col>
                |
                <Col>
                  <Button disabled style={redTextButton}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Typography>
        <Typography.Link style={addressredTextButton} href="#" disabled>
          + ADD ADDRESS
        </Typography.Link>
      </Typography>
    </Layout>
  );
};

export default AddressPage;
