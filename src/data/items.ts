 
  

  const items = async ()=>{
    const response  =  await fetch("https://raw.githubusercontent.com/Kushagra-Kukreti/e-commerce-data/main/data.json")

    console.log(response); 
    return response.json();
  }
 

 export const data =  await items();
  
 