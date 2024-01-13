import StoreItem from "../components/StoreItem";
import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import { dataProp } from "../components/CartItem";
import { dataItem, useShoppingCart } from "../context/ShoppingCartContext";
import { filterData } from "../utils/FilterData";
 

export type filterType = {
  t:string
  v:string
}




const Store = () => {
   const [search, setSearch] = useState("");
   const{dataItems} = useShoppingCart()
   const[storeItems,setStoreItems] = useState<dataItem[]>(dataItems)
   const[categories,setCategories] = useState<string[]>();
   const [appliedFilters,setAppliedFilters] = useState<filterType[]>([])
   const [title,setTitle] = useState<string>();
   const [value,setValue] = useState<string>();
   const addFilter = (t:string,v:string)=>{
    setAppliedFilters([...appliedFilters,{t,v}])
    setTitle(t)
    setValue(v);
  }

  useEffect(()=>{
        filterData(storeItems,appliedFilters,dataItems,setStoreItems,title||"",value||"")
  },[appliedFilters])

 useEffect(()=>{

        console.log("Data Items initialised")
        setStoreItems(dataItems);
        const categoriesSet = new Set<string>();
        dataItems.forEach((item: dataItem) => {
          categoriesSet.add(item.category);
        });
        console.log("Categories List initialised")
        setCategories(Array.from(categoriesSet));


        return (()=>{
          console.log("Store unmounted")
          setStoreItems([])
          setCategories([])
        })
        
 },[dataItems])


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          marginBottom: "0.3rem",
          marginTop: "0.3rem",
        }}
      >
        <Dropdown
          addFilter={addFilter}
          title={"Rating"}
          menuInfo={["High to Low", "Low to High"]}
        />
        <Dropdown
         addFilter={addFilter}
          title={"Price"}
          menuInfo={["High to Low", "Low to High"]}
        />
        <Dropdown
         addFilter={addFilter}
          title={"Category"}
          menuInfo={categories||[]}
        />

        <input
          type="text"
          style={{
            width: "60%",
            borderRadius: "0.5rem",
            borderStyle: "none",
            border: "0.15rem lightgrey solid",
            outline: "none",
            padding: "0.2rem",
          }}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search here"
        />
      </div>

      <div className="row">
        {storeItems && storeItems
          .filter((i: dataProp) => {
            return search.toLowerCase() === " "
              ? i
              : i.name.toLowerCase().startsWith(search.toLowerCase());
          })
          .map((item: dataProp, index: number) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3"
            >
              <StoreItem
               key={index}
                rating={item.rating}
                id={item.id}
                url={item.imgUrl}
                price={item.price}
                title={item.name}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Store;
