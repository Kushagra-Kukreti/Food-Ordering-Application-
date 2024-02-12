import { NavLink } from "react-router-dom"

import { StoreItemProp } from "./StoreItem";
const ImageSection = ({ id, url, price, title, rating ,category}:StoreItemProp) => {
  return (
    <NavLink
      className="card-img-top" to={"/product"}
      state={{ id, url, price, title, rating,category }}
    >
      <img src={url} className="item-image" />
    </NavLink>
  
  )
}

export default ImageSection
