import { Checkbox } from "antd";
import { useState } from "react";

const ColorFilter = ({ onColorChange }) => {
  const colorOptions = ["Black", "Silver", "Red"];
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange = (selected) => {
    setSelectedColors(selected);

    // Emit selected values to the parent component
    if (onColorChange) {
      onColorChange(selected);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h4>Color</h4>
      <Checkbox.Group
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "15px",
        }}
        options={colorOptions}
        value={selectedColors}
        onChange={handleColorChange}
      />
    </div>
  );
};
export default ColorFilter;
