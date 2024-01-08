                            
//jisse localstorage set hogi  

import { useEffect, useState } from "react"

//intialvalue ya to ek cartItem ka array hoga ya usse set krne ke liye function 
 export function useLocalStorage<T>(key:string,initialValue:T|(()=>T)){
    
    const [value,setValue] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(key);
        

        //info mil gyi agr
        if(jsonValue!=null)return JSON.parse(jsonValue);

        //nahi mili

        return initialValue;

    })


    useEffect (()=>{
       localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    






    return [value,setValue] as [typeof value,typeof setValue]


 }