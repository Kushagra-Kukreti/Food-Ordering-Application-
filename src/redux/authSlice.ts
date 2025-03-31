import { createSlice } from "@reduxjs/toolkit";

type AuthProps = {
  auth: boolean;
  userData: any;
};


const authStatus = localStorage.getItem("authentication")?true:false;

const initialState: AuthProps = {
  auth: authStatus,
  userData: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.auth = action.payload;
      if(action.payload === true){
        localStorage.setItem("authentication","true");
      }
      else{
        localStorage.removeItem("authentication");
      }
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setAuthStatus, setUserData } = authSlice.actions;
export default authSlice.reducer;
