import { useState } from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"



type DropdownProps={
  title:string
  menuInfo:string[]
  addFilter:(title:string,val:string)=>void
}
const Dropdown = ({title,menuInfo,addFilter}:DropdownProps) => {

  const [selected,setSelected] = useState<boolean>(false);
  const {removeFromSelectedFilters}=useShoppingCart()

  if(selected){
   return<div
   key={title}
      style={{
        display:"flex",
        gap:"0.2em",
        outline:"none",
        padding:"0.2rem",
        borderRadius:"0.5rem",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"red"
      }}
    >
    <span>{title}</span> 
     <span  className="btn m-0 p-0" onClick={()=>{
      setSelected(false)
      removeFromSelectedFilters(title)
      }}>&times;</span>
    </div>
 

  }
  else
  return (
    <div key={title} className="dropdown">
    <button
      className={`${"btn dropdown-toggle text-muted"}`}
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{
        outline:"none",
        border:"0.15rem solid lightgrey",
        padding:"0.2rem",
        borderRadius:"0.5rem"
      }}
    >
     {title}
    </button>
    <ul className="dropdown-menu">
      {menuInfo.map(item=>
        <li key={item}>
        <a onClick={()=>{
          setSelected(true)
          addFilter(title,item)
          }}  className="dropdown-item" href="#">
          {item}
        </a>
      </li>
        )}
    </ul>
  </div>
  )
}

export default Dropdown
