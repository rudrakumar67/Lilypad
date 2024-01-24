import { Checkbox } from "antd";
import { useState } from "react";

const CategoryFilter = ({ onCategoryChange }) => {
    const categoryOptions = ["All"];
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (selected) => {
      setSelectedCategories(selected);

      // Emit selected values to the parent component
      if (onCategoryChange) {
        onCategoryChange(selected);
      }
    };

    return (
      <div style={{ marginBottom: "16px" }}>
        <h4>Category</h4>
        <Checkbox.Group
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "15px",
          }}
          options={categoryOptions}
          value={selectedCategories}
          onChange={handleCategoryChange}
        />
      </div>
    );
  };
  export default CategoryFilter;