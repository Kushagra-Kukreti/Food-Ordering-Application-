import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../css/Header.css";
import BucketIcon from "./BucketIcon";
import AuthenticationButtons from "./AuthenticationButtons";

const Header: React.FC = () => {
  const { cartQuantity } = useShoppingCart();
  const {isAuthenticated,user}= useAuth0()

  if (isAuthenticated) {
    localStorage.setItem("authentication", "true");
    localStorage.setItem("name", user?.nickname?.toString() || "");
  }

  return (
    <>
      <nav className="navbar navbar-expand sticky-top bg-light">
        <div className="container-fluid container">
          <div className="collapse navbar-collapse align-items-baseline" id="navbarSupportedContent">
            <NavLink className="navbar-brand" to={"/"}>
              <h2 className="brand-name">
                <span className="brand-text">Food</span>Junction
              </h2>
            </NavLink>
          </div>

          <AuthenticationButtons/>
          &nbsp;
          &nbsp;
          {cartQuantity > 0 && localStorage.getItem("authentication") ? (
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              className="btn btn-outline-primary rounded-circle"
            >
               <div className="bucket-container">
              <BucketIcon/>
              <div className="cart-count">{cartQuantity}</div>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
