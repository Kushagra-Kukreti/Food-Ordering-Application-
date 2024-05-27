import React from "react";
import "../css/StoreItem.css";
const ImageSection =React.lazy(()=>import("./ImageSection"));
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import DetailsSection from "./DetailsSection";

export type StoreItemProp = {
  id: number;
  url: string;
  price: number;
  title: string;
  rating: number;
  category:string
};

const StoreItem: React.FC<StoreItemProp> = ({ id, url, price, title, rating,category}) => {

  return (
    <div className="card" style={{ width: "22rem" }}>
      <Suspense fallback={<Skeleton animation="wave" variant="rectangular" style={{height:"17em",width:"100%",objectFit:"cover",borderRadius:"1em"}}/>}>
      <ImageSection id={id} url={url} price={price} title={title} rating={rating} category={category}/>
      </Suspense>
      <div className="d-flex flex-column p-1">
       <DetailsSection price={price} rating={rating} title={title}/>
       {/* <ButtonGroup id={id}/>  */}
      </div>
    </div>
  );
};

export default StoreItem;
