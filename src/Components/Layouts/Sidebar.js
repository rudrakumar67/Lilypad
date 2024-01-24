import {
  SettingOutlined, 
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setActiveSection } from "../../Redux/actionTypes";

function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const menuItems = [
    {
      label: "Profile",
      key: "/user/profile",
      icon: <SettingOutlined />,
    },
    {
      label: "Orders",
      key: "/user/orders",
      icon: <SettingOutlined />,
    },
    {
      label: "Address",
      key: "/user/address",
      icon: <SettingOutlined />,
    },
  ];

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
    dispatch(setActiveSection(pathName.slice(1)));
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        defaultOpenKeys={['/catalog']}
        mode='inline'
        items={menuItems}
      ></Menu>
    </div>
  );
}
export default Sidebar;

