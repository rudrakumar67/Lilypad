import React, { useEffect, useState } from "react";
import { Modal, Result, Button, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

const OrderPlacedModal = ({ isModalOpen, onModalClose }) => {
  const [modalVisible, setModalVisible] = useState(isModalOpen);
  const navigator = useNavigate();

  const handleModalOk = () => {
    setModalVisible(false);
    navigator("/products");
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    onModalClose();
    navigator("/products");
  };
  useEffect(() => {
   setModalVisible(isModalOpen);
  }, [isModalOpen])

  return (
    <div>
      <Modal
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="OK"
        cancelText="Cancel"
      >
        <Row justify="center" align="middle" style={{ height: "400px" }}>
          <Col span={12}>
            <Result
              icon={
                <CheckCircleOutlined
                  style={{ color: "#52c41a", fontSize: "72px" }}
                />
              }
              title="Order Completed"
              subTitle="Your order has been successfully placed."
              extra={[
                <Button type="primary" key="productList">
                  <Link to="/products">Go to Product List</Link>
                </Button>,
              ]}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default OrderPlacedModal;
