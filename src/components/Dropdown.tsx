

type DropdownProps={
  getSorted:(title:string,value:string)=>void
  title:string
  menuInfo:string[]
}
const Dropdown = ({getSorted,title,menuInfo}:DropdownProps) => {
  return (
    <div className="dropdown">
    <button
      className="btn dropdown-toggle text-muted"
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
        <li>
        <a onClick={()=>getSorted(title,item)} className="dropdown-item" href="#">
          {item}
        </a>
      </li>
        )}
    </ul>
  </div>
  )
}

export default Dropdown
