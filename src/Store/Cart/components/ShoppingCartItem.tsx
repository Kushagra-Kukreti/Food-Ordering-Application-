import "../css/ShoppingCartItem.css";
import CarItems from "./CarItems";
import CartHeader from "./CartHeader";
import CartTotalSection from "./CartTotalSection";
import CheckoutButton from "./CheckoutButton";

const ShoppingCartItem = () => {
  
  return (
    <div
      className={"offcanvas offcanvas-end"}
      tabIndex={-1}
      data-bs-scroll="true"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <CartHeader/>
      <div className="offcanvas-body vstack gap-3">
        <CarItems/>
        <CartTotalSection />
        <CheckoutButton/>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
