import React, { useEffect, useState } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  DatePicker,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { updateUserDetails } from "../../api/user";
import dayjs from "dayjs";
const { Title, Text } = Typography;
const { Option } = Select;

const ProfilePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [userDetails, setUserDetails] = useState(undefined);

  const parseDate = (dateString) => {
    if (!dateString) return null;
    return dayjs(dateString, 'DD-MM-YYYY'); // Adjust the date format as per your userDetails.dob format
  };

  const onFinish = (values) => {
    // Format date to string before sending to API
    const formattedValues = {
      email: values.email,
      phone_number: values.phoneno,
      gender: values.gender,
      dob: values.dob ? values.dob.format('DD-MM-YYYY') : '', // Format moment date as string
      full_name: values.name,
    };
    // Handle form submission logic here
    console.log('Form values:', formattedValues);
    // Send 'formattedValues' to your API
    updateUserDetails(formattedValues).then(response => {
      console.log("Success: ", response);
    })
  };
  useEffect(() => {
    if (userDetails) {
      form.setFieldsValue({
        name: userDetails.full_name,
        gender: userDetails.gender,
        phoneno: userDetails.mobile,
        dob: userDetails.dob ? parseDate(userDetails.dob) : null,
        email: userDetails.email,
      });
    } else {
      form.resetFields();
    }
  }, [form, userDetails]);
  const checkUserLoggedIn = () => {
    const otpless_user_token = JSON.parse(
      localStorage.getItem("otpless_user_token")
    );

    if (!otpless_user_token) {
      navigate("/eStore");
    } else {
      const userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (userDetails) {
        setUserDetails(userDetails);
        console.log("userDetail", userDetails);
      }
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <Layout>
      <Title style={{ color: "#04b2a9", fontSize: "25px", fontWeight: "600" }}>
        My Profile
      </Title>
      <Text style={{ paddingTop: "4px", paddingBottom: "40px" }}>
        Your profile preferences help us personalize recommendations for you.
      </Text>

      <Form
        form={form}
        name="profile_form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={32}>
          <Col span={12} sm={24} xs={24} md={12}>
            <Form.Item name="name">
              <Input placeholder="Your Name" style={{ height: "56px" }} />
            </Form.Item>
          </Col>
          <Col span={12} sm={24} xs={24} md={12}>
            <Form.Item name="gender">
              <Select placeholder="Select Gender" style={{ height: "56px" }}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12} sm={24} xs={24} md={12}>
            <Form.Item name="phoneno">
              <Input placeholder="Phone Number" style={{ height: "56px" }} />
            </Form.Item>
          </Col>
          <Col span={12} sm={24} xs={24} md={12}>
            <Form.Item name="dob">
              <DatePicker
                placeholder="Birthdate"
                style={{ height: "56px", width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12} sm={24} xs={24} md={12}>
            <Form.Item name="email">
              <Input
                placeholder="Email"
                type="email"
                style={{ height: "56px" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{ paddingTop: "20px" }}>
          <Button
            type="primary"
            style={{
              backgroundColor: "white",
              color: "#04b2a9",
              border: "1px solid #04b2a9",
              height: "50px",
              width: "149px",
            }}
          >
            Discard
          </Button>
          <Button
            type="default"
            htmlType="submit"
            style={{
              marginLeft: 16,
              backgroundColor: "#04b2a9",
              color: "white",
              height: "50px",
              width: "149px",
            }}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default ProfilePage;
