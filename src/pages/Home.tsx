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

  if(isAuthenticated){
    localStorage.setItem("authentication", "true")
  }

  if (!localStorage.getItem("authentication")) {
    return <Suspense fallback={<Skeleton style={{
      
      marginTop: "1.5rem",
      height: "80vh",
      width: "100%",
      objectFit: "cover",
      backgroundColor:"lightgray"
     
    }}  variant="rectangular" animation="wave"/>}><BeforeAuthentication/></Suspense>
  }
  return (
    <div
      style={{
        gap: "2rem",
        marginTop: "5%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}
      className="row"
    >
      {categories.map((item,index) => (
        <Suspense fallback={<Skeleton style={{

          height: "10rem",
          objectFit: "cover",
    
        }}  className="card col-6-sm col-4-md col-4-lg col-4-xl"  variant="rectangular" animation="wave" />}>
        <Category item={item} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default Home;
