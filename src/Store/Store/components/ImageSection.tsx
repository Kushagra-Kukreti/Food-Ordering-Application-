import { NavLink } from "react-router-dom"

import { StoreItemProp } from "./StoreItem";
const ImageSection = ({ id, url, price, title, rating }:StoreItemProp) => {
  return (
    <NavLink
      className="card-img-top" to={"/product"}
      state={{ id, url, price, title, rating }}
    >
      <img src={url} className="item-image" alt={title} />
    </NavLink>
  
  )
}

export default ImageSection
