import React from "react";
import { useLocation } from "react-router-dom";
import formatNumber from "../../utils/Format";
import styles from "../css/Product.module.css";
import ButtonGroup from "../../Shared/components/ButtonGroup";
import RatingBadge from "../../Store/Store/components/RatingBadge";

const Product: React.FC = () => {

  
  
  const location = useLocation();
  const info = location.state;

  if (info === null) {
    return <h4 className="text-muted mt-3">You came to the product page without selecting a product.</h4>;
  }
  return (
    <div className={styles['product-container']}>
      <div className={styles['image-container']}><img src={info.url} className={styles["product-image"]} alt="Product" /></div>
      <div className={styles['details-container']}>
        <span className={styles['name-section']}>{info.title}</span>
        <div className={styles['popularity-section']}>
          <span className={styles['rating']}><RatingBadge rating={info.rating}/></span>
          <span className={styles['category']}>{ info.category}</span>
        </div>
      </div>
      <div className={styles['order-container']}>
        <div className={styles['add-to-cart']}> <ButtonGroup id={info.id}/></div>
        <span className={styles['price']}>{formatNumber(info.price)}</span>
      </div>
    </div>
  );
};

export default Product;
