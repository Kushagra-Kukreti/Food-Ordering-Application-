import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "@mui/material/Skeleton";
import React, { Suspense } from "react";
const BeforeAuthentication = React.lazy(()=>import("../components/BeforeAuthentication"));
const Category = React.lazy(()=>import("../components/Category")) ;

const Home = () => {
  const categories = [
    {
      type: "Dining",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/dining.jpg",
    },
    {
      type: "Delivery",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/delivery.jpg",
    },
    {
      type: "NightLife",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/nightlife.jpg",
    },
  ];

 

  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Suspense fallback={<Skeleton style={{
      
        marginTop: "1.5rem",
        height: "80vh",
        width: "100%",
        objectFit: "cover",
     
    }} animation="wave" />}><BeforeAuthentication/></Suspense>
  }
  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      {categories.map((item,index) => (
        <Suspense fallback={<Skeleton style={{

            width: "20rem",
            border: "0.1rem solid orange",
    
        }} animation="wave" />}>
        <Category item={item} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default Home;
