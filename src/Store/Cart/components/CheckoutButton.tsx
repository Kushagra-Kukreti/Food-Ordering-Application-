import { useAuth0 } from "@auth0/auth0-react";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

const CheckoutButton = () => {

    const {emptyCart} = useShoppingCart()
    const {logout} =  useAuth0()
  return (
    <div
          className="btn btn-secondary checkout-btn"
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            localStorage.removeItem("authentication");
            localStorage.removeItem("name");
            emptyCart();
          }}
        >
          CHECKOUT
    </div>
  )
}

export default CheckoutButton
