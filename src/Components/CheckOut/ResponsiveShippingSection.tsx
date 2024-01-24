import {
  Col,
  Form,
  Typography,
  Space,
  Checkbox,
  Select,
  Button,
  Radio,
  Image,
  RadioChangeEvent,
} from "antd";
import React, { useState } from "react";

const { Text } = Typography;
interface ShippingSectionProps {
  handleButtonClick: () => void;
}

const ResponsiveShippingSection: React.FC<ShippingSectionProps> = ({
  handleButtonClick,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("Credit Card");

  const handlePaymentChange = (e: RadioChangeEvent) => {
    setPaymentMethod(e.target.value);
  };

  const radioStyle = {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    height: "30px",
    lineHeight: "30px",
  };
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Typography
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "15px",
            width: "100%",
          }}
        >
          <Space direction="vertical">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <div>
                <Text type="secondary">Contact</Text>
                <Text strong style={{ color: "black", marginLeft: "10px" }}>
                  {" "}
                  pitterpark132@gmail.com
                </Text>
              </div>
            </div>
            <div
              style={{
                display: "flex",

                paddingBottom: "10px",
              }}
            >
              <div>
                <Text type="secondary">Ship to</Text>
                <Text strong style={{ color: "black", marginLeft: "10px" }}>
                  {" "}
                  Sunnah Lab, 13th Street. 47 W 13th St, New York
                </Text>
              </div>
            </div>
          </Space>
        </Typography>
        <Typography
          style={{ fontSize: "25px", paddingTop: "15px", fontWeight: "bold" }}
        >
          Payment Method
        </Typography>

        <Typography
          style={{
            padding: "15px",
            width: "100%",

            marginTop: "20px",
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Radio.Group onChange={handlePaymentChange} value={paymentMethod}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <Radio value="Credit Card">Credit Card</Radio>
              </div>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  width: "100%",
                }}
              >
                <div style={radioStyle}>
                  <Radio value="Paypal">
                    <Image
                      style={{ height: "28px" }}
                      src="/Paypal.png"
                      alt="alt"
                    />
                  </Radio>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  width: "100%",
                }}
              >
                <Radio value="Debit Card">Debit Card</Radio>
              </div>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <Radio value="COD">Cash on Delivery (COD)</Radio>
              </div>
            </Radio.Group>
          </Space>
        </Typography>
        <div style={{ paddingBottom: "40px" }}></div>
        <Typography
          style={{
            border: "1px solid #04b2a9",
            borderRadius: "10px",
            padding: "15px",
            width: "100%",
            backgroundColor: "#FFE5DB",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "10px",
              fontSize: "14px",
            }}
          >
            <div>
              <Text>Shipping Free</Text>
            </div>
            <div>
              <Text style={{ color: "black", textAlign: "right" }}>
                Rs.0.00
              </Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "10px",
              fontSize: "14px",
            }}
          >
            <div>
              <Text>Sub total</Text>
            </div>
            <div>
              <Text style={{ color: "black", textAlign: "right" }}>
                Rs.12,236
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <div>
              <Text>Total</Text>
            </div>
            <div>
              <Text strong style={{ color: "black", textAlign: "right" }}>
                Rs.12,236
              </Text>
            </div>
          </div>
        </Typography>

        <div style={{ paddingTop: "60px" }}>
          <Button
            htmlType="submit"
            style={{
              backgroundColor: "#04B2A9",

              color: "white",
              width: "100%",
              height: "56px",
            }}
            onClick={handleButtonClick}
          >
            Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveShippingSection;
