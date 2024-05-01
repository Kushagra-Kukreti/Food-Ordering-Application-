import { createSlice } from "@reduxjs/toolkit";

type AuthProps = {
    auth:boolean,
    userData:any
}

const initialState:AuthProps = {
    auth:false,
    userData:null
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        setAuthStatus:(state,action)=>{
            state.auth = action.payload || localStorage.getItem("authentication")||false;
        }
        ,
        setUserData: (state,action)=>{   
            state.userData = action.payload;
        }
    }

})

export const {setAuthStatus,setUserData} = authSlice.actions;
export default authSlice.reducer;
