import { useShoppingCart } from "../../../context/ShoppingCartContext";
import React from "react";
import "../css/FilterCountButton.css";

const FilterCountButton: React.FC = () => {
  const { appliedFilters } = useShoppingCart();
  return (
    <div key={"Filters"}>
      <div className="filter-button">
        Filters
        {appliedFilters.length > 0 && (
          <span className="filter-count">{appliedFilters.length}</span>
        )}
      </div>
    </div>
  );
};

export default FilterCountButton;
