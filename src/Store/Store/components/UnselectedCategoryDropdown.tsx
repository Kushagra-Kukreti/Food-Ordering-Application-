import { useShoppingCart } from "../../../context/ShoppingCartContext"
import "../css/Dropdown.css"


type UnselectedCategoryDropdown ={
    title:string 
    menuInfo:string[]
    setSelected:React.Dispatch<React.SetStateAction<boolean>>
}
const UnselectedCategoryDropdown = ({title,menuInfo,setSelected}:UnselectedCategoryDropdown) => {
    const { setAppliedFilters, appliedFilters } = useShoppingCart();
  return (
    <div key={title} className="dropdown">
                <button className="btn dropdown-toggle text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {title}
                </button>
                <ul className="dropdown-menu ">
                    {menuInfo.map(item => (
                        <li key={item}>
                            <a
                                onClick={() => {
                                    setSelected(true);
                                    setAppliedFilters([...appliedFilters, { t: title, v: item }]);
                                }}
                                className="dropdown-item"
                                href="#"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default UnselectedCategoryDropdown
