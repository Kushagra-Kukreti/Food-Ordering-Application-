import { useShoppingCart } from "../../../context/ShoppingCartContext";
import "../css/Dropdown.css"
type SelectedCategoryDropdownProp ={
    title:string
    setSelected:React.Dispatch<React.SetStateAction<boolean>>
}

const SelectedCategoryDropdown = ({title,setSelected}:SelectedCategoryDropdownProp) => {
    const {removeFromSelectedFilters} =useShoppingCart()
  return (
        <div
            key={title}
            className="selectedDropdown"
            onClick={() => {
                setSelected(false);
                removeFromSelectedFilters(title);
            }}
        >
            <span>{title}</span>
            <span className="btn p-1 m-0" >&times;</span>
        </div>
  )
}

export default SelectedCategoryDropdown
