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

const { Item } = Form;
const { Option } = Select;

interface FormData {
  name: string;
  emailMe: boolean;
  countryRegion: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  saveInfo: boolean;
}

interface FirstSectionProps {
  handleButtonClick: () => void;
}

const ResponsiveFirstSection: React.FC<FirstSectionProps> = ({
  handleButtonClick,
}) => {
  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (fieldName: keyof FormData, value: string | boolean) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (values: FormData) => {
    // Handle form submission here using 'values'
    console.log("Form submitted:", values);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ padding: "60px" }}>
        <div>
          <Typography style={{ fontSize: "25px", fontWeight: "500" }}>
            Contact{" "}
          </Typography>
        </div>

        <div style={{ textAlign: "right" }}>
          <Typography style={{ color: "gray" }}>
            Have an account?
            <span
              style={{
                color: "#04B2A9",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Login{" "}
            </span>
          </Typography>
        </div>

        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          style={{ marginTop: "20px" }}
          onFinish={handleSubmit}
          onValuesChange={(
            changedValues: Partial<FormData>,
            allValues: FormData
          ) => {
            const fieldNames = Object.keys(changedValues) as Array<
              keyof Partial<FormData>
            >;
            if (fieldNames.length > 0) {
              const fieldName = fieldNames[0];
              handleChange(
                fieldName,
                changedValues[fieldName] as string | boolean
              );
            }
          }}
        >
          <Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              placeholder="Email or mobile phone number"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Item>
          <Item
            name="checkbox"
            valuePropName="checked"
            style={{ color: "gray" }}
          >
            <Checkbox
              checked={formData.emailMe}
              onChange={(e) => handleChange("emailMe", e.target.checked)}
            >
              Email me with news and offers
            </Checkbox>
          </Item>
          <Typography style={{ fontSize: "25px", fontWeight: "500" }}>
            Shipping address
          </Typography>
          <Item name="countryRegion" style={{ paddingTop: "20px" }}>
            <Select
              placeholder="Select Country/Region"
              style={{ width: "100%", fontWeight: "bold", height: "45px" }}
            >
              <Option value="country1">Country 1</Option>
              <Option value="country2">Country 2</Option>
            </Select>
          </Item>
          <Item>
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
                  <Input placeholder="First Name" style={{ height: "45px" }} />
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
                  <Input placeholder="Last Name" style={{ height: "45px" }} />
                </Item>
              </Col>
            </Row>
          </Item>
          <Item>
            <Input placeholder="Address" style={{ height: "45px" }} />
          </Item>
          <Typography style={{ fontWeight: "bold", marginBottom: "20px" }}>
            + Add apartment, suite, etc.
          </Typography>
          <Item>
            <Row gutter={16}>
              <Col span={12}>
                <Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "city",
                    },
                  ]}
                >
                  <Input placeholder="City" style={{ height: "45px" }} />
                </Item>
              </Col>
              <Col span={12}>
                <Item name="state">
                  <Select
                    placeholder="Select State"
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      height: "45px",
                    }}
                  >
                    <Option value="state1">State 1</Option>
                    <Option value="state2">state 2</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  name="pincode"
                  rules={[
                    {
                      required: true,
                      message: "Pincode",
                    },
                  ]}
                >
                  <Input placeholder="PIN code" style={{ height: "45px" }} />
                </Item>
              </Col>
            </Row>
          </Item>
          <Item
            name="checkbox"
            valuePropName="checked"
            style={{ color: "gray" }}
          >
            <Checkbox
              checked={formData.saveInfo}
              onChange={(e) => handleChange("saveInfo", e.target.checked)}
            >
              Save this information for next time
            </Checkbox>
          </Item>
          <Item>
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
              Continue To Shipping
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default ResponsiveFirstSection;
