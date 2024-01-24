import FourthSection from "../Components/Home/FourthSection";
import { useEffect, useState } from "react";
import FirstSection from "../Components/ProductDetail/FirstSection";
import SecondSection from "../Components/ProductDetail/SecondSection";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/product";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    // Make an API call using the retrieved id
    const fetchProductDetails = async (product_id) => {
      try {
        const response = await getProduct(product_id); // Replace with your actual API endpoint
        setProduct(response?.data); // Assuming the API response contains the product details
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails(product_id);
    console.log("your product id is: ", product_id);
  }, [product_id]);
  return (
    <>
      {product ? (
        <>
          <FirstSection productData={product} />
          <SecondSection productData={product} />
        </>
      ) : (
        <></>
      )}
      <FourthSection />
    </>
  );
};
export default ProductDetails;
