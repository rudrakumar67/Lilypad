import { Slider } from "antd";

const PriceFilter = ({onPriceSelected}) => {
    // Define the minimum and maximum price values
    const minPrice = 1; // 1k
    const maxPrice = 100; // 100k

    // Initialize the default values for the Slider
    const defaultValue = [minPrice, maxPrice];
    const onPriceChange = (value) => {
        onPriceSelected(value);
    }
    const formatPrice = (value) => {
      return `${value}K`;
    };

    return (
      <div>
        <h4>Filter by price</h4>
        <Slider
          range
          defaultValue={defaultValue}
          min={minPrice}
          max={maxPrice}
          onChange={onPriceChange}
          tipFormatter={(value) => formatPrice(value)}
        />
        <p>{`Price ${minPrice}K - ${maxPrice}K`}</p>
      </div>
    );
  };
  export default PriceFilter;