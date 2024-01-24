import React, { useEffect, useState } from "react";
// import Navbar from '../Components/Layouts/Navbar'
// import FourthSection from '../Components/Home/FourthSection'
// import Footer from '../Components/Layouts/Footer'
import ProductList from "../Components/Products/ProductList";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Drawer, Layout, Rate, Slider } from "antd";
import ProductListHeader from "../Components/Products/ProductListHeader";
import ProductOfferBanner from "../Components/Layouts/ProductOfferBanner";
import { getAllProduct } from "../api/product";
import PriceFilter from "../Components/PriceFilter";
import RatingFilter from "../Components/RatingFilter";
import CategoryFilter from "../Components/CategoryFilter";
import ColorFilter from "../Components/ColorFilter";
import BrandFilter from "../Components/BrandFilter";
import LocationFilter from "../Components/LocationFilter";
const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "320px",
  lineHeight: "10px",
  color: "#fff",
  padding: "0 10px",
};

const siderStyle = {
  textAlign: "center",
  background: "#fff",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 15px",
  margin: "0 10px",
  border: "1px solid #ccc",
  borderRadius: "2px",
};
const layoutWithBorderStyle = {
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
};

const ProductsStore = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([1, 100]);
  const [selectedRating, setSelectedRating] = useState(1);
  const onCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  const onColorChange = (selectedValue) => {
    setSelectedColor(selectedValue);
    console.log(selectedValue);
  };
  const onPriceSelected = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);
  };
  const onBrandChange = (selectedBrand) => {
    setSelectedBrand(selectedBrand);
  };
  const onLocationChange = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  };
  const onRatingSelected = (selectedRating) => {
    setSelectedRating(selectedRating);
  };
  const onTextEntered = (text) => {
    setSearchTerm(text);
  };
  const onSortingChange = (text) => {
    setSortingOrder(text);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const filteredProduct = products
      .filter((product) => {
        if (searchTerm) {
          return product.productName
            ?.toLowerCase()
            .includes(searchTerm?.toLowerCase());
        }
        return true;
      })
      .filter((product) => {
        // Filter by price range
        return (
          product.productPrice >= selectedPriceRange[0] * 1000 &&
          product.productPrice <= selectedPriceRange[1] * 1000
        );
      })
      // .filter(
      //   (product) => product.ratings >= selectedRating && product.ratings <= 5
      // )
      .filter((product) => {
        // Filter by selected colors in a case-insensitive manner
        const productColor = product.color?.toLowerCase(); // Convert product color to lowercase
        const selectedColors = selectedColor.map((color) =>
          color?.toLowerCase()
        ); // Convert selected colors to lowercase

        return (
          selectedColors.length === 0 || selectedColors.includes(productColor)
        );
      })
      .filter((product) => {
        const productLocation = product.location?.toLowerCase();
        const locations = selectedLocation.map((location) =>
          location?.toLowerCase()
        ); // Convert selected colors to lowercase

        return locations.length === 0 || locations.includes(productLocation);
      })
      .filter((product) => {
        const productBrand = product.brand?.toLowerCase();
        const brands = selectedBrand.map((location) =>
          location?.toLowerCase()
        ); // Convert selected colors to lowercase

        return brands.length === 0 || brands.includes(productBrand);
      })
      .sort((a, b) => {
        if (sortingOrder === "asc") {
          return a.productPrice - b.productPrice; // Ascending order
        } else if (sortingOrder === "desc") {
          return b.productPrice - a.productPrice; // Descending order
        } else if (sortingOrder === "date") {
          // Sort based on updatedAt field when sortingOrder is 'date'
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0; // Return 0 for no sorting
      });
    setFilteredProducts(filteredProduct);
  }, [
    sortingOrder,
    searchTerm,
    products,
    selectedColor,
    selectedCategory,
    selectedPriceRange,
    selectedRating,
    selectedBrand,
    selectedLocation,
  ]);

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
  const getProductFromApi = async () => {
    try {
      const prod = await getAllProduct();
      setProducts(prod?.data);
      setFilteredProducts(prod?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    getProductFromApi();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <ProductOfferBanner
        height={windowWidth > 800 ? 260 : undefined}
        title="Grab Upto 50% Off On Selected Scooter"
        description=""
        buttonText="Buy Now"
      />
      <ProductListHeader
        onTextEntered={onTextEntered}
        onSortingChange={onSortingChange}
      />
      {windowWidth > 500 ? (
        <Layout hasSider style={layoutWithBorderStyle}>
          <Sider style={siderStyle}>
            <CategoryFilter onCategoryChange={onCategoryChange} />
            <Divider style={{ margin: "16px 0" }} />
            <ColorFilter onColorChange={onColorChange} />
            <Divider style={{ margin: "16px 0" }} />
            <PriceFilter onPriceSelected={onPriceSelected} />
            <Divider style={{ margin: "16px 0" }} />
            <BrandFilter onBrandChange={onBrandChange} />
            <Divider style={{ margin: "16px 0" }} />
            <LocationFilter onLocationChange={onLocationChange} />
            <Divider style={{ margin: "16px 0" }} />
            <RatingFilter onRatingSelected={onRatingSelected} />
          </Sider>
          <Content style={contentStyle}>
            <ProductList products={filteredProducts} />
          </Content>
        </Layout>
      ) : (
        <>
          {" "}
          <Button
            type="text"
            onClick={showDrawer}
            icon={<MenuUnfoldOutlined />}
          />
          <Layout hasSider style={layoutWithBorderStyle}>
            <Drawer
              title="Close"
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
            >
              <CategoryFilter onCategoryChange={onCategoryChange} />
              <Divider style={{ margin: "16px 0" }} />
              <ColorFilter onColorChange={onColorChange} />
              <Divider style={{ margin: "16px 0" }} />
              <PriceFilter onPriceSelected={onPriceSelected} />
              <Divider style={{ margin: "16px 0" }} />
              <BrandFilter onBrandChange={onBrandChange} />
              <Divider style={{ margin: "16px 0" }} />
              <LocationFilter onLocationChange={onLocationChange} />
              <Divider style={{ margin: "16px 0" }} />
              <RatingFilter onRatingSelected={onRatingSelected} />
            </Drawer>

            <Content style={contentStyle}>
              <ProductList products={filteredProducts} />
            </Content>
          </Layout>
        </>
      )}
      {/* <FourthSection />
            <Footer /> */}
    </>
  );
};

export default ProductsStore;
