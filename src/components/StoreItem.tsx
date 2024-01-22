import formatNumber from "../utils/Format";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";

export type StoreItemProp = {
  id: number;
  url: string;
  price: number;
  title: string;
  rating: number;
};

const StoreItem = ({ id, url, price, title, rating }: StoreItemProp) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="card" style={{ width: "22rem" }}>
      <NavLink
      className="card-img-top"
        to={"/product"}
        state={{ id, url, price, title, rating }}
      >
        <img 
          src={url} style={{height:"10rem", width:'100%', objectFit:"cover"}}

        />
      </NavLink>

     
      <div className="d-flex flex-column p-1">
        <div className="d-flex flex-row justify-content-between align-items-baseline m-2">
          <h4 className="card-text">{title} 
          <div
          style={{marginLeft:"0.5rem",fontSize:"40%"}}
        className="badge text-bg-success"
        >
        {rating}

        <svg
          style={{
            alignContent: "center",
            marginLeft: "0.2rem",
            marginBottom: "0.15rem",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div>
</h4>
          <h5 className="card-text text-muted">{formatNumber(price)}</h5>
        </div>
        {quantity === 0 ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              increaseCartQuantity(id);
            }}
            className="btn btn-danger w-100"
          >
            + Add to Cart
          </div>
        ) : (
          <>
            <div
              className="d-flex align-items-center justify-content-center m-2"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="btn  btn-sm btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  increaseCartQuantity(id);
                }}
              >
                +
              </div>
              <div className="d-flex align-items-baseline">
                <span>
                  <h3>{quantity}</h3>
                </span>{" "}
                in Cart
              </div>
              <div
                className="btn  btn-sm btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseCartQuantity(id);
                }}
              >
                -
              </div>
              <div
                className="btn btn-sm btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(id);
                }}
              >
                Remove
              </div>
            </div>
             
             
           
          </>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
