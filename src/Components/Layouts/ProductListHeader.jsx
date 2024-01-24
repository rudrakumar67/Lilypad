import React from 'react';
import { Layout, Row, Col, Input, Button, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  SearchOutlined,
  AppstoreOutlined,
  BarsOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const ProductListHeader = ({onTextEntered, onSortingChange}) => {
  const handleMenuClick = (e) => {
    console.log('click', e);
    onSortingChange(e.key);
  };
  const items = [
    {
      label: 'Ascending',
      key: 'asc',
      icon: <SortAscendingOutlined />,
    },
    {
      label: 'Descending',
      key: 'desc',
      icon: <SortDescendingOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleInputChange = (e) => {
    // Access the new value of the input through e.target.value
    onTextEntered(e.target.value);
  };
  return (
    <Header style={{ background: 'white', height: 'auto', padding: '8px 0' }}>
      <Row align="middle" justify="space-between">
        <Col xs={24} sm={24} lg={8}>
          {/* Text on the left */}
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <h1>Electric Product for you</h1>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          {/* Search Box in the middle */}
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          {/* Icons on the right */}
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <Space>
              {/* <Button icon={<AppstoreOutlined />} />
              <Button icon={<BarsOutlined />} /> */}
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Sort by
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default ProductListHeader;
