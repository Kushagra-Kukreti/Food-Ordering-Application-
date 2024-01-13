
type DropdownProps={
  title:string
  menuInfo:string[]
  addFilter:(title:string,val:string)=>void
}
const Dropdown = ({title,menuInfo,addFilter}:DropdownProps) => {
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
        <a onClick={()=>addFilter(title,item)}  className="dropdown-item" href="#">
          {item}
        </a>
      </li>
        )}
    </ul>
  </div>
  )
}

export default Dropdown
