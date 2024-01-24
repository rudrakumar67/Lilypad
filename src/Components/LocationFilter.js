import { Checkbox } from "antd";
import { useState } from "react";

const LocationFilter = ({ onLocationChange }) => {
    const locations = [
        "Jaipur",
        "Uttar Pradesh",
        "Karnataka",
        "Gujarat",
        "Himachal Pradesh",
        "Test"
      ];
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleColorChange = (selected) => {
    setSelectedLocations(selected);

    // Emit selected values to the parent component
    if (onLocationChange) {
        onLocationChange(selected);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h4>Location</h4>
      <Checkbox.Group
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "15px",
        }}
        options={locations}
        value={selectedLocations}
        onChange={handleColorChange}
      />
    </div>
  );
};
export default LocationFilter;
