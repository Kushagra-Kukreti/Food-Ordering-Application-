import React from "react";
import "../css/StoreItem.css";
import  ButtonGroup  from "../../../Shared/components/ButtonGroup";
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
};

const StoreItem: React.FC<StoreItemProp> = ({ id, url, price, title, rating }) => {

  return (
    <div className="card" style={{ width: "22rem" }}>
      <Suspense fallback={<Skeleton animation="wave" variant="rectangular" style={{height:"15em",width:"100%",objectFit:"cover",borderRadius:"1em"}}/>}>
      <ImageSection id={id} url={url} price={price} title={title} rating={rating} />
      </Suspense>
      <div className="d-flex flex-column p-1">
       <DetailsSection price={price} rating={rating} title={title}/>
       <ButtonGroup id={id}/> 
      </div>
    </div>
  );
};

export default StoreItem;