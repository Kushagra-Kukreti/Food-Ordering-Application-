import React from "react";
import { useLocation } from "react-router-dom";
import formatNumber from "../../utils/Format";
import styles from "../css/Product.module.css";
import ButtonGroup from "../../Shared/components/ButtonGroup";
import RatingBadge from "../../Store/Store/components/RatingBadge";
import { useAppSelector } from "../../redux/hooks";

const Product: React.FC = () => {
  const location = useLocation();
  const info = location.state;
  
  const auth  = useAppSelector((state)=>state.authSlice.auth);
  

  if (info === null || auth === false ) {
    return (
      <h4 className="text-muted mt-3">
        You came to the product page without selecting a product.
      </h4>
    );
  }
  return (
    <div className={styles["product-container"]}>
      <div className={styles["image-container"]}>
        <img src={info.url} className={styles["product-image"]} alt="Product" />
      </div>

      <div className={styles["content-container"]}>
        <div className={styles["details-container"]}>
          <div className={styles["name-section"]}>{info.title}</div>
          <div className={styles["popularity-section"]}>
            <div className={styles["rating"]}>
              <RatingBadge rating={info.rating} />
            </div>
            <div className={styles["description-section"]}>
              <h5>Description</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                cum possimus facere illum! Soluta rerum, dolorem amet fuga
                consequatur laboriosam unde in incidunt voluptas voluptatum
                necessitatibus quas, consectetur repellendus reprehenderit
                magni, ipsum sed veniam inventore architecto provident.
                Aspernatur esse.
              </p>
            </div>

            <div className={styles["delivery-section"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-truck"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
              </svg>
              Free Standard Delivery on all orders
            </div>
            <div className={styles["category"]}>{info.category}</div>
          </div>
          <hr />
        </div>
        <div className={styles["order-container"]}>
          <div className={styles["price"]}>{formatNumber(info.price)}</div>
          <div className={styles["add-to-cart"]}>
            {" "}
            <ButtonGroup id={info.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
