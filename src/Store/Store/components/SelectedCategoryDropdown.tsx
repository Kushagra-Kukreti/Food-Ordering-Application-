import { removeFromSelectedFilters } from "../../../redux/cartSlice";
import { useAppDispatch } from "../../../redux/hooks";
import "../css/Dropdown.css"
type SelectedCategoryDropdownProp ={
    title:string
    setSelected:React.Dispatch<React.SetStateAction<boolean>>
}

const SelectedCategoryDropdown = ({title,setSelected}:SelectedCategoryDropdownProp) => {
    // const {removeFromSelectedFilters} =useShoppingCart()
    const dispatch =  useAppDispatch();
  return (
        <div
            key={title}
            className="selectedDropdown"
            onClick={() => {
                setSelected(false);
                dispatch(removeFromSelectedFilters(title));
            }}
        >
            <span>{title}</span>
            <span className="btn p-1 m-0" >&times;</span>
        </div>
  )
}

export default SelectedCategoryDropdown
