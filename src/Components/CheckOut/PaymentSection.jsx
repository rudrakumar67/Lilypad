import {
  Col,
  Typography,
  Space,
  Button,
  Radio,
  Image,
  Row,
  Breadcrumb,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserAddress } from "../../api/user";
import { useSelector } from "react-redux";

const { Text } = Typography;

const PaymentSection = ({ onOrderPlace }) => {
  const radioStyle = {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    height: "30px",
    lineHeight: "30px",
  };
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [myAddress, setMyAddress] = useState(null);
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.authToken);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleOrderPlace = () => {
    if (!paymentMethod) {
      alert("please select payment method first");
    } else onOrderPlace(myAddress, paymentMethod);
  };
  const getAndStoreUserAddress = async () => {
    const addressList = await getUserAddress();
    setAddressList(addressList);
    getAddressFromLocalStorage(addressList);
    console.log(addressList);
  };
  const getAddressFromLocalStorage = (addressList) => {
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress && storedAddress !== "null") {
      const selectedAddress = JSON.parse(storedAddress);
      setMyAddress(selectedAddress);
    } else {
      if (addressList && addressList.length) {
        setMyAddress(addressList[0]);
        localStorage.setItem("selectedAddress", JSON.stringify(addressList[0]));
      }
    }
  };
  const generateAddressString = (addressObj) => {
    const getValueOrDefault = (obj, key) => (obj && obj[key]) || "";

    const formattedAddress = `${getValueOrDefault(
      addressObj,
      "firstName"
    )} ${getValueOrDefault(addressObj, "lastName")}\n${getValueOrDefault(
      addressObj,
      "address"
    )}, ${getValueOrDefault(addressObj, "city")}, ${getValueOrDefault(
      addressObj,
      "state"
    )}, ${getValueOrDefault(addressObj, "pincode")}\n${getValueOrDefault(
      addressObj,
      "countryRegion"
    )}`;

    return formattedAddress;
  };
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
    getAndStoreUserAddress();
  }, []);
  return (
    <Col xs={24} sm={24} md={10}>
      <div
        style={{
          padding: "0 40px",
          marginTop: "40px",
          borderRight: "1px solid #ccc",
        }}
      >
        <Row>
          <Col span={18} style={{ marginBottom: "10px" }}>
            <Breadcrumb
              separator=">"
              style={{ color: "#04B2A9", fontSize: "20px" }}
              items={[
                {
                  title: "Information",
                },
                {
                  title: (
                    <Link to={"/checkout/shipping"}>
                      <span style={{ cursor: "pointer" }}>Shipping</span>
                    </Link>
                  ),
                },
                {
                  title: <span style={{ cursor: "pointer" }}>Payment</span>,
                },
              ]}
            />
          </Col>
        </Row>
        <Typography
          style={{ border: "1px solid #ccc", padding: "15px", width: "100%" }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <Text type="secondary">Contact</Text>
              </div>
              <div style={{ marginRight: "20px", flexGrow: 1 }}>
                <Text strong>{myAddress?.contact}</Text>
              </div>
              <div>
                <Link to={"/checkout/address"}>
                  <Text
                    strong
                    style={{ whiteSpace: "nowrap", color: "#04B2A9" }}
                  >
                    Change
                  </Text>
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginRight: "20px" }}>
                <Text type="secondary" style={{ whiteSpace: "nowrap" }}>
                  Ship to
                </Text>
              </div>
              <div style={{ marginRight: "20px", flexGrow: 1 }}>
                <Text strong>{generateAddressString(myAddress)}</Text>
              </div>
              <div>
                <Link to={"/checkout/address"}>
                  <Text
                    strong
                    style={{ whiteSpace: "nowrap", color: "#04B2A9" }}
                  >
                    Change
                  </Text>
                </Link>
              </div>
            </div>
          </Space>
        </Typography>
        <Typography
          style={{ fontSize: "25px", paddingTop: "15px", fontWeight: "bold" }}
        >
          Payment Method
        </Typography>
        <Typography style={{ color: "gray", paddingTop: "7px" }}>
          All Transaction are secure and encrypted
        </Typography>
        <Typography
          style={{
            width: "100%",

            marginTop: "20px",
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Row>
              <Col span={24}>
                <Radio.Group
                  onChange={handlePaymentChange}
                  value={paymentMethod}
                  style={{ display: "block" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically center the content
                      border: "1px solid #ccc",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    <Radio value="Credit Card" style={{ margin: 0 }}>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        Credit Card
                        <img
                          style={{ height: "20px", marginLeft: "20px" }}
                          src="/paymentoptions.png"
                          alt="alt"
                        />
                      </span>
                    </Radio>
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
                        <img
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
              </Col>
            </Row>
          </Space>
        </Typography>

        <div>
          <Button
            style={{
              backgroundColor: "#04B2A9",
              color: "white",
              margin: "20px 0",
              width: "200px",
              height: "48px",
            }}
            onClick={() => handleOrderPlace()}
          >
            {paymentMethod ? "Place order" : "Continue To Payment"}
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default PaymentSection;
