import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const UserAddressCard = ({ addressList, onEdit, onDelete }) => {
    const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleCardClick = (selectedAddress, index) => {
    setSelectedCard(index);
    setSelectedAddress(selectedAddress);
  };
  const scrollContainerStyle = {
    height: "400px", // Set a fixed height for the container
    overflowY: "auto", // Enable vertical scrollbar
  };
  const onAddressSelected = () => {
    // const selectedAddressObj = {
    //     "save_as": "Home",
    //     "user_id": "f5de97da-9a8b-422b-a65a-b0ba62ee6c5c",
    //     "contact": "9999999999",
    //     "createdAt": "2023-12-07T16:05:20.345Z",
    //     "address": "D-67, Prakash Enclave, Mayur Vihar Phase 1, New Delhi, Delhi, 110091, India",
    //     "id": "ec06a684-8477-46d6-a2d7-01492cba9abc",
    //     "name": "Nitish Kumar"
    // }
    localStorage.setItem('selectedAddress', JSON.stringify(selectedAddress));
    navigate("/checkout/payment");
  }
  const generateAddressString = (addressObj) => {
    const getValueOrDefault = (obj, key) => (obj && obj[key]) || '';
  
    const formattedAddress = `${getValueOrDefault(addressObj, 'firstName')} ${getValueOrDefault(addressObj, 'lastName')}\n${getValueOrDefault(addressObj, 'address')}, ${getValueOrDefault(addressObj, 'city')}, ${getValueOrDefault(addressObj, 'state')}, ${getValueOrDefault(addressObj, 'pincode')}\n${getValueOrDefault(addressObj, 'countryRegion')}\nContact: ${getValueOrDefault(addressObj, 'contact')}`;
  
    return formattedAddress;
  };
  const getAddressFromLocalStorage = () => {
    const storedAddress = localStorage.getItem('selectedAddress');
    if (storedAddress) {
      const selectedAddress = JSON.parse(storedAddress);
      setSelectedAddress(selectedAddress);
      const index = addressList.findIndex((address) => {
        return address.id === selectedAddress.id;
      });      
      setSelectedCard(index);
    } else {
      setSelectedCard(0);
      console.log('No stored address found');
    }
  };
  useEffect(() => {
    getAddressFromLocalStorage();
  }, []);
  useEffect(() => {
    const index = addressList.findIndex((address) => {
        return address.id === selectedAddress?.id;
      });
      if(index !== -1)
      setSelectedCard(index);
  }, [addressList]);

  // Menu for the dropdown with edit and delete options
  const menu = (
    <Menu>
      <Menu.Item key="edit" onClick={onEdit}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={onDelete}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Col
      xs={24}
      sm={24}
      md={10}
      style={{
        padding: "0 40px",
        marginTop: "40px",
        borderRight: "1px solid #ccc",
      }}
    >
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
            title: <span style={{ cursor: "pointer" }}>Address</span>,
          },
        ]}
      />
      <div
        style={{
          marginTop: "10px",
          height: "450px",
          overflowY: "auto",
        }}
      >
        {addressList.map((address, index) => (
          <Card
            onClick={() => handleCardClick(address, index)}
            style={{
              backgroundColor: selectedCard === index ? "#04B2A9" : "white",
              color: selectedCard === index ? "white" : "black",
              boxShadow:
                selectedCard === index
                  ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                  : "none",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Left side: Address type info */}
              <div style={{ marginRight: "20px" }}>
                {" "}
                {/* Add margin-right */}
                <p>{address.save_as}</p>
              </div>

              {/* Middle: Address */}
              <div style={{ marginRight: "20px", flexGrow: 1 }}>
                {" "}
                {/* Add margin-right and flexGrow */}
                <p>
                  <b>{generateAddressString(address)}</b>
                </p>
              </div>

              {/* Right side: Dropdown menu */}
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <EllipsisOutlined style={{ fontSize: 24, cursor: "pointer" }} />
              </Dropdown>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to={'/checkout/shipping'}>
        <Button
          htmlType="submit"
          style={{
            backgroundColor: "#04B2A9",
            color: "white",
            width: "200px",
            margin: "20px 0",
            height: "48px",
          }}
        >
          Add New Address
        </Button>
        </Link>
        <Button
          style={{
            backgroundColor: "#04B2A9",
            color: "white",
            margin: "20px 0",
            width: "200px",
            height: "48px",
          }}
          onClick={() => onAddressSelected()}
        >
          Select Address
        </Button>
      </div>
    </Col>
  );
};

export default UserAddressCard;
