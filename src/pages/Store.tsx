import { useState } from "react";
import StoreItem from "../components/StoreItem";
import {StoreItemProp} from '../components/StoreItem'
import storeItems from "../data/items.json";
import Dropdown from "../components/Dropdown";

const Store = () => {
  const [search, setSearch] = useState("");
  const [val,setVal] =useState("")
  const [title,setTitle] = useState("");

         const getSorted = (t:string,c:string)=>{
             
                setVal(c);
                setTitle(t);
    
        }

        const sortData = (a:StoreItemProp,b:StoreItemProp)=>{
          if(title === "Price"){
            if(val === "High to Low")
            return b.price-a.price
            else if(val === "Low to High")
            return a.price-b.price
          return 0;
          }
          else if(title === "Rating"){
            if(val === "High to Low")
            return b.rating-a.rating
            else if(val === "Low to High")
            return a.rating-b.rating
          return 0;
          }
          else return 0;
            
        }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          marginBottom:"0.3rem",
          marginTop:"0.3rem"
        }}
      >
        
        <Dropdown getSorted = {getSorted} title={"Rating"} menuInfo ={["High to Low","Low to High"]} />
        <Dropdown getSorted = {getSorted} title={"Price"} menuInfo ={["High to Low","Low to High"]} />
        <Dropdown getSorted = {getSorted} title={"Category"} menuInfo ={["Car", "Book","Computer","Banana"]}/>

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
        {storeItems
        .sort((a,b)=>sortData(a,b))
          .filter((i) => {
            return search.toLowerCase() == " "
              ? i
              : i.name.toLowerCase().startsWith(search.toLowerCase());
          })
          .map((item, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3"
            >
              <StoreItem
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
