import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useState } from "react";


type SignUpReturn = {
  signUp:(s:string,p:string)=>void,
  error:string | null,
  user:any | null,
}

const useSignUp = ():SignUpReturn => {
  const [user,setUser] = useState<any>();
  const [error,setError] = useState(null);
    
    const signUp = (email:string,password:string)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          setUser(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } 

    return {signUp,error,user};

}

export default useSignUp
