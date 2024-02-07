

const CartHeader = () => {
  return (
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
  )
}

export default CartHeader
