import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import CartDetail from "../Components/Cart/Cart";
import "../Components/Cart/CartStyle/firstSection.css";
import ResponsiveCartDetail from "../Components/Cart/ResponsiveCart";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {windowWidth < 600 ? <ResponsiveCartDetail /> : <CartDetail />}
    </>
  );
};
export default Cart;
