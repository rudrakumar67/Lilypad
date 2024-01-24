import { Checkbox } from "antd";
import { useState } from "react";

const BrandFilter = ({ onBrandChange }) => {
  const brandOptions = [
    "Ninebot",
    "Razor",
    "Apollo",
    "FluidFreeRide",
    "Dualtron"
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandChange = (selected) => {
    setSelectedBrands(selected);

    // Emit selected values to the parent component
    if (onBrandChange) {
      onBrandChange(selected);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h4>Brands</h4>
      <Checkbox.Group
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "15px",
        }}
        options={brandOptions}
        value={selectedBrands}
        onChange={handleBrandChange}
      />
    </div>
  );
};

export default BrandFilter;