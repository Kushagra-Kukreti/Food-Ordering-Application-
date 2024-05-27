import React from "react";
import "../css/FilterCountButton.css";
import { useAppSelector } from "../../../redux/hooks";

const FilterCountButton: React.FC = () => {
  // const { appliedFilters } = useShoppingCart();
  const { appliedFilters } = useAppSelector(state=>state.cartSlice);
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
