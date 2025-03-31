import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useState } from "react";


type SignInReturn = {
  signIn:(s:string,p:string)=>void,
  error:string | null,
  user:any | null,
}

const useSignIn = ():SignInReturn => {
  const [user,setUser] = useState<any>();
  const [error,setError] = useState(null);
    
    const signIn = (email:string,password:string)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    } 

    return {signIn,error,user};

}

export default useSignIn
