import Dropdown from "./Dropdown"
import FilterCountButton from "./FilterCountButton"

import "../css/Store.css"
type StoreHeaderProps ={
    setSearch:React.Dispatch<React.SetStateAction<string>>
    categories:string[]
}

const StoreHeader = ({setSearch,categories}:StoreHeaderProps) => {
  return (
    <div className="store-header">
        <FilterCountButton />
        <Dropdown title={"Rating"} menuInfo={["High to Low", "Low to High"]} />
        <Dropdown title={"Price"} menuInfo={["High to Low", "Low to High"]} />
        <Dropdown title={"Category"} menuInfo={categories} />
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
        />
      </div>

  )
}

export default StoreHeader
