import React from "react";
import { useLocation } from "react-router-dom";
import formatNumber from "../../utils/Format";
import "../css/Product.css";
import ButtonGroup from "../../Shared/components/ButtonGroup";

const Product: React.FC = () => {
  
  const location = useLocation();
  const info = location.state;

  if (info === null) {
    return <h4 className="text-muted mt-3">You came to the product page without selecting a product.</h4>;
  }
  return (
    <div className="product-card">
      <img src={info.url} className="product-image" alt="Product" />
      <div className="product-details">
        <h5 className="product-title">{info.title}</h5>
        <p className="product-description">
          In a world filled with culinary wonders...
        </p>
        <p className="product-price">{formatNumber(info.price)}</p>
        <div className="product-buttons">
           <ButtonGroup id={info.id}/>
        </div>
      </div>
    </div>
  );
};

export default Product;
