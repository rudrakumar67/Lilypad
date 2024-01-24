import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Checkbox,
  Select,
} from "antd";
import { useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../api/user";
import Link from "antd/es/typography/Link";

const { Item } = Form;
const { Option } = Select;
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const ShippingSection = ({ handleButtonClick }) => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [shippingAddress, setShippingAddress] = useState([]);
  const navigate = useNavigate();
  const [form] = useForm();
  form.setFieldsValue({
    email: userDetails.email,
  });
  form.setFieldsValue({
    mobile: userDetails.mobile,
  });
  console.log("firstsectionchecckut", userDetails);
  const [formData, setFormData] = useState({
    name: "",
    emailMe: false,
    countryRegion: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    saveInfo: false,
  });
  const openLoginModal = () => {
    // createLogicPage();
    window.otplessInit();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (values) => {
    // Handle form submission here using 'values'
    console.log("Form submitted:", values);
    addAddress(values).then((response) => {
      console.log(response);
      navigate("/checkout/payment");
    });
  };
  const onContinueToShipClicked = () => {
    navigate("/checkout/payment");
  }

  return (
    <Col xs={24} sm={24} md={10}>
      <div
        style={{
          padding: "0 30px",
          marginTop: "30px",
          borderRight: "1px solid #ccc",
        }}
      >
        <div>
          <Typography style={{ fontSize: "25px", fontWeight: "500" }}>
            Contact{" "}
          </Typography>
        </div>

        {!userDetails?.email ? (
          <div style={{ textAlign: "right" }}>
            <Typography style={{ color: "gray" }}>
              Have an account?
              <span
                style={{
                  color: "#04B2A9",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => openLoginModal()}
              >
                {" "}
                Login{" "}
              </span>
            </Typography>
          </div>
        ) : (
          <></>
        )}

        <Form
          form={form}
          name="loginForm"
          initialValues={{ remember: true }}
          style={{ marginTop: "5px" }}
          onFinish={handleSubmit}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Item
                name="contact"
                rules={[
                  {
                    required: true,
                    message: "Please enter you email or mobile!",
                  },
                ]}
              >
                <Input placeholder="Enter you email or mobile" />
              </Item>
            </Col>
          </Row>
          <Row>
            {/* <Item
                    name="isSubscribedForNewsAndOffer"
                    valuePropName="checked"
                    style={{ color: "gray" }}
                  >
                    <Checkbox
                      checked={formData.emailMe}
                      onChange={(e) =>
                        handleChange("emailMe", e.target.checked)
                      }
                    >
                      Email me with news and offers
                    </Checkbox>
                  </Item> */}
          </Row>
          <Typography style={{ fontSize: "25px", fontWeight: "500" }}>
            Shipping address
          </Typography>
          <Row gutter={16} style={{ marginTop: "5px" }}>
            <Col span={24}>
              <Item
                name="countryRegion"
                rules={[
                  {
                    required: true,
                    message: "please enter country name",
                  },
                ]}
              >
                <Input size="large" placeholder="Country name" />
              </Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input size="large" placeholder="First Name" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Last Name" />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address!",
                  },
                ]}
              >
                <TextArea size="large" placeholder="Address" autoSize />
              </Item>
            </Col>
          </Row>
          {/* <Typography style={{ fontWeight: "bold" }}>
                  + Add apartment, suite, etc.
                </Typography> */}
          <Row gutter={16}>
            <Col span={8}>
              <Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "city",
                  },
                ]}
              >
                <Input size="large" placeholder="City" />
              </Item>
            </Col>
            <Col span={8}>
              <Item
                name="state"
                rules={[
                  {
                    required: true,
                    message: "please select state",
                  },
                ]}
              >
                <Select
                  size="large"
                  placeholder="Select State"
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  {states.map((state, index) => (
                    <Option key={index} value={state}>
                      {state}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col span={8}>
              <Item
                name="pincode"
                rules={[
                  {
                    required: true,
                    message: "Pincode",
                  },
                ]}
              >
                <Input size="large" type="number" placeholder="PIN code" />
              </Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Item
                name="save_as"
                rules={[
                  {
                    required: true,
                    message: "please select address type",
                  },
                ]}
              >
                <Select
                  size="large"
                  placeholder="Select address type"
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  <Option value="Home">Home</Option>
                  <Option value="Work">Work</Option>
                </Select>
              </Item>
            </Col>
          </Row>
          {/* <Row gutter={16}>
                  <Col>
                    <Item
                      name="saveAddresss"
                      valuePropName="checked"
                      style={{ color: "gray" }}
                    >
                      <Checkbox
                        onChange={(e) =>
                          handleChange("saveInfo", e.target.checked)
                        }
                      >
                        Save this information for next time
                      </Checkbox>
                    </Item>
                  </Col>
                </Row> */}
          <Row>
            <Col span={24}>
              <Item>
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: "#04B2A9",
                    color: "white",
                    height: "48px",
                  }}
                >
                  Save Address
                </Button>
                  <Button
                  onClick={() => onContinueToShipClicked()}
                    style={{
                      backgroundColor: "#04B2A9",
                      color: "white",
                      height: "48px",
                    }}
                  >
                    Continue To Payment
                  </Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default ShippingSection;
