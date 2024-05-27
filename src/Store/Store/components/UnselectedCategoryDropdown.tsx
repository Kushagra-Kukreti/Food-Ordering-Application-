import { setAppliedFilters } from "../../../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import "../css/Dropdown.css"


type UnselectedCategoryDropdown ={
    title:string 
    menuInfo:string[]
    setSelected:React.Dispatch<React.SetStateAction<boolean>>
}
const UnselectedCategoryDropdown = ({title,menuInfo,setSelected}:UnselectedCategoryDropdown) => {
    // const { setAppliedFilters, appliedFilters } = useShoppingCart();
    const { appliedFilters } = useAppSelector(state=>state.cartSlice);
    const dispatch = useAppDispatch();
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
                                    dispatch(setAppliedFilters([...appliedFilters, { t: title, v: item }]));
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
