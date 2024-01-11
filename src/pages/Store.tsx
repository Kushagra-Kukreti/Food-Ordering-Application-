import StoreItem from "../components/StoreItem";
import Dropdown from "../components/Dropdown";
import { useCallback, useEffect, useMemo, useState } from "react";
import { data as storeItems } from "../data/items";
import { dataProp } from "../components/CartItem";

const Store = () => {
  const [search, setSearch] = useState("");
  const [val, setVal] = useState("");
  const [title, setTitle] = useState("");

  const [dataItems, setDataItems] = useState(storeItems);
  const [filters,setFilters] = useState<string[]>([])
  const sortData = useCallback(
    (data: dataProp[], sortBy: string, sortOrder: string) => {
      
      return data.slice().sort((a: dataProp, b: dataProp) => {
        setFilters([...filters,sortBy])
        if (sortBy === "Price") {
          return sortOrder === "High to Low" ? b.price - a.price : a.price - b.price;
        } else if (sortBy === "Rating") {
          return sortOrder === "High to Low" ? b.rating - a.rating : a.rating - b.rating;
        }
        return 0;
      });
    },
    [filters]
  );

  const getSorted = useCallback(
    (t: string, c: string) => {
      setVal(c);
      setTitle(t);

      let sortedData;

      if (title === "Category") {
        setFilters([...filters,"Category"])
        sortedData = storeItems.filter((currItem: dataProp) => val === currItem.category);
      } else if (title === "Price" || title === "Rating") {
        sortedData = sortData(dataItems, title, val);
      } else {
        sortedData = [...storeItems]; // dont do any changes
      }

      setDataItems(sortedData);
    },
    [title, val,filters, dataItems, sortData]
  );

  const info = useMemo(() => {
    const categoriesSet = new Set<string>();
    storeItems.forEach((item: dataProp) => {
      categoriesSet.add(item.category);
    });
    return Array.from(categoriesSet);
  }, []);

  useEffect(() => {
    getSorted(title, val);
  }, [title, val, getSorted]);

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
          colored = {filters.includes("Rating")?true:false}
          getSorted={getSorted}
          title={"Rating"}
          menuInfo={["High to Low", "Low to High"]}
        />
        <Dropdown
        colored = {filters.includes("Price")?true:false}
          getSorted={getSorted}
          title={"Price"}
          menuInfo={["High to Low", "Low to High"]}
        />
        <Dropdown
          colored = {filters.includes("Category")?true:false}
          getSorted={getSorted}
          title={"Category"}
          menuInfo={info}
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
        {dataItems
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
