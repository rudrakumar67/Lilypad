import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuProps,
  Image,
  Typography,
  Col,
  Row,
  Button,
  Space,
  Badge,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
//@ts-ignore
import logo from "../../assets/images/darkLogo.svg";
//@ts-ignore
import bag from "../../assets/images/bag.svg";
//@ts-ignore
import user from "../../assets/images/user.svg";
//@ts-ignore
import burgerIcon from "../../assets/images/burgerIcon.svg";
//@ts-ignore
import battery from "../../assets/images/battery.svg";
import "./layoutStyle/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import "./menu.css";
import { getUserCartList, userLogin } from "../../api/user";
import { updateCartItem } from "../../Redux/actionTypes";

const { Text } = Typography;

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    // Event handler to update windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleReload = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("reload", handleReload);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("reload", handleReload);
    };
  }, [windowWidth]);
  const initializeApp = () => {
    const auth_token = localStorage.getItem("auth_token");
    const user_details = JSON.parse(localStorage.getItem("user_details"));

    if (auth_token && user_details) {
      // Dispatch actions to set token and user info in Redux store
      // dispatch(setAuthToken(auth_token));
      // dispatch(setUserDetails(user_details));
      getUserCartList().then((response) => {
        console.log(response);
        dispatch(updateCartItem(response));
      });
    }
  };
  const onUserAlreadyLoggedIn = () => {
    const otplessUserToken = JSON.parse(localStorage.getItem("otpless_user_token"));

    if (otplessUserToken) {
      console.log("yes user alrady logged in");
      navigate("/user/profile");

    }
  }
  const openLoginModal = () => {
    onUserAlreadyLoggedIn();
    window.otplessInit();
    const modalContainer = document.getElementById("modalContainer");
    const modal = document.getElementById("otpless-login-page");
    modalContainer.style.display = "flex";
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };
  const closeModal = (e) => {
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "none";
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script);
    window.otpless = async (otplessUser) => {
      console.log(JSON.stringify(otplessUser));
      const tokenObj = {
        token: otplessUser.token,
        email: otplessUser.email?.email,
        waNumber: otplessUser.waNumber,
        waName: otplessUser.email?.name,
      };
      const userData = await userLogin(tokenObj);
      const { auth_token, ...userInfo } = userData.data.data;

      // Save token and user info in localStorage
      localStorage.setItem("auth_token", auth_token);
      localStorage.setItem("user_details", JSON.stringify(userInfo));
      localStorage.setItem("otpless_user_token", JSON.stringify(tokenObj));

      // Dispatch actions to save token and user info in Redux store
      // dispatch(setAuthToken(auth_token));
      // dispatch(setUserDetails(userInfo));
      console.log(userData);
      initializeApp();
      closeModal();
    };
    return () => {
      const divid = document.getElementById("otplessIdScript");
      document.body.removeChild(divid);
    };
  }, []);
  const items = [
    {
      label: <Text className="nav-item">Home</Text>,
      key: "home",
    },
    {
      label: <Text className="nav-item">Products</Text>,
      key: "products",
    },

    {
      label: <Text className="nav-item">About Us</Text>,
      key: "aboutUs",
    },
    {
      label: <Text className="nav-item">Contact Us</Text>,
      key: "contactUs",
    },
    {
      label: (
        <Badge count={cartItems.length}>
          <Image src={bag} width={20} preview={false} />
        </Badge>
      ),
      key: "addToBag",
    },
    {
      label: <Image src={battery} width={20} preview={false} />,
      key: "battery",
    },
    {
      label: (
        <div>
          <div className="model-init">
            <div
              className="modal-container"
              id="modalContainer"
              onClick={closeModal}
            >
              <div className="modal">
                <span className="close-icon" onClick={closeModal}>
                  &times;
                </span>
                <div id="otpless-login-page"></div>
              </div>
            </div>
          </div>
          <Image
            src={user}
            width={20}
            preview={false}
            onClick={openLoginModal}
          />
        </div>
      ),
      key: "profile",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    if (e.key === "aboutUs") {
      navigate("/about");
    } else if (e.key === "contactUs") {
      navigate("/contact");
    } else if (e.key === "home") {
      navigate("/");
    } else if (e.key === "products") {
      navigate("/products");
    } else if (e.key === "addToBag") {
      navigate("/cart");
    } else if (e.key === 'battery') {
      navigate('/powering-up');
    }
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    // Define an array of keys corresponding to your routes
    const keys = {
        '/': 'home',
        '/about': 'aboutUs',
        '/contact': 'contactUs',
        '/products': 'products',
        '/vision': 'vision',
        '/powering-up': 'battery',
    };    
    // Get the current pathname
    const { pathname } = location;

    // Update the 'current' state based on the pathname
    setCurrent(keys[pathname]);
}, [location]);

  return (
    <>
      {windowWidth > 500 ? (
        <nav className="navbar">
        <Row>
          <Col xs={0} md={5} className="nav-logo-container">
            <Image preview={false} onClick={() => navigate('/')} src={logo} className="nav-logo" />
          </Col>
          <Col xs={24} md={19} lg={19}>
            <Menu
              className="navbar-menu"
              onClick={onClick}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              selectedKeys={[current]}
            />
          </Col>
        </Row>
        </nav>
      ) : (
        <>
          <Row className="navbar">
            <Col span={5} className="nav-logo-container">
              <Image preview={false} onClick={() => navigate('/')} src={logo} className="nav-logo" />
            </Col>
            <Col span={18}>
              <Row
                justify="end"
                align="middle"
                className="mobile-navbar"
                gutter={30}
              >
                <Col>
                  <Link to="/cart">
                    <Badge count={cartItems.length}>
                      <Image src={bag} width={20} preview={false} />
                    </Badge>
                  </Link>
                </Col>
                <Col>
                  <Image src={user} width={20} preview={false} />
                </Col>
                <Col>
                  <Image src={battery} width={20} preview={false} />
                </Col>
                <Col onClick={handleShowMenu}>
                  <Image src={burgerIcon} preview={false} />
                </Col>
              </Row>
            </Col>
            {showMenu && (
              <Space direction="vertical" className="space-container">
                <Col className="space-item" onClick={() => navigate("/")}>
                  <Text className="space-text">Home</Text>
                </Col>
                <Col className="space-item" onClick={() => navigate("/about")}>
                  <Text className="space-text">About</Text>
                </Col>
                <Col
                  className="space-item"
                  onClick={() => navigate("/contact")}
                >
                  <Text className="space-text">Contact</Text>
                </Col>
              </Space>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default Navbar;
