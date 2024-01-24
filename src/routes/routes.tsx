import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Components/Layouts/AppLayout";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Vision from "../Screens/Vision";
import Contact from "../Screens/Contact";
// import Products from "../Screens/Products";
import ProductDetails from "../Screens/ProductDetail";
import Cart from "../Screens/Cart";
import ProductsStore from "../Screens/ProductStore";
import UserAddressSection from "../Screens/UserAddressSection";
import ShippingSectionPage from "../Screens/ShippingSectionPage.jsx";
import ChosePaymentSection from "../Screens/ChoosePaymentSection";
import UserLayoutPage from "../Components/Layouts/UserLayout";
import OrderPage from "../Screens/User/OrderPage";
import ProfilePage from "../Screens/User/ProfilePage";
import AddressPage from "../Screens/User/AddressPage";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import TermsCondition from "../Screens/TermsCondition";
import PoweringUp from "../Screens/PoweringUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout Component={Home} />,
  },
  {
    path: "/about",
    element: <AppLayout Component={About} />,
  },
  {
    path: "/vision",
    element: <AppLayout Component={Vision} />,
  },
  {
    path: "/privacy-policy",
    element: <AppLayout Component={PrivacyPolicy} />,
  },
  {
    path: "/terms-and-condition",
    element: <AppLayout Component={TermsCondition} />,
  },
  {
    path: "/powering-up",
    element: <AppLayout Component={PoweringUp} />,
  },
  {
    path: "/contact",
    element: <AppLayout Component={Contact} />,
  },
  {
    path: "/products",
    element: <AppLayout Component={ProductsStore} />,
  },
  {
    path: "/product/:product_id",
    element: <AppLayout Component={ProductDetails} />,
  },
  // {
  //   path: "/products",
  //   element: <AppLayout Component={ProductsStore} />,
  // },
  {
    path: "/cart",
    element: <AppLayout Component={Cart} />,
  },
  {
    path: "/checkout/address",
    element: <AppLayout Component={UserAddressSection} />,
  },
  {
    path: "/checkout/shipping",
    element: <AppLayout Component={ShippingSectionPage} />,
  },
  {
    path: "/checkout/payment",
    element: <AppLayout Component={ChosePaymentSection} />,
  },
  {
    path: "/user",
    element: <UserLayoutPage Component={ProfilePage} />,
  },
  {
    path: "/user/profile",
    element: <UserLayoutPage Component={ProfilePage} />,
  },
  {
    path: "/user/orders",
    element: <UserLayoutPage Component={OrderPage} />,
  },
  {
    path: "/user/address",
    element: <UserLayoutPage Component={AddressPage} />,
  },
]);

export default router;
