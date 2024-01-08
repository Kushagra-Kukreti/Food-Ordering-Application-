import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  if(isAuthenticated){
    localStorage.setItem("authentication","true");
    localStorage.setItem("name",user?.nickname?.toString()||"");
  }
 
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid container">
          <div
            style={{ gap: "0.5rem" }}
            className="collapse navbar-collapse align-items-baseline"
            id="navbarSupportedContent"
          >
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              <h2 style={{ color: "red", fontWeight: "bold" }}>
                <span style={{ color: "black" }}>Food</span>Junction
              </h2>
            </NavLink>

           { localStorage.getItem('authentication') && <h4>Welcome ,{localStorage.getItem("name")}</h4>} 
          </div>

          {localStorage.getItem('authentication') ? (
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                {
                  logout({ logoutParams: { returnTo: window.location.origin } })
                  localStorage.removeItem('authentication');
                  localStorage.removeItem('name');
                }
                 
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="btn  btn-sm btn-primary"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}

          {(cartQuantity > 0 && localStorage.getItem("authentication") )? (
            <button
              onClick={() => openCart()}
              style={{ marginLeft:"0.5rem",height: "3rem", width: "3rem", position: "relative" }}
              className="btn btn-outline-primary pb-2 pt-1 rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-fill "
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>
              <div
                className="bg-danger rounded-circle"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  right: "0",
                  bottom: "0",
                  position: "absolute",
                  height: "1.5rem",
                  width: "1.5rem",
                  transform: "translate(19%,34%)",
                }}
              >
                {cartQuantity}
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
