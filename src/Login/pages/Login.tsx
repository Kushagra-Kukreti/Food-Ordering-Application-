import { Outlet } from "react-router-dom"
import LoginComponent from "../components/LoginComponent"

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center p-2'>
    <div className='col-12 d-flex' style={{height:"97vh"}} > 
       <div className="col-6" style={{height:"100%"}}><img style={{objectFit:"cover",width:"100%",height:"100%"}} src="/imgs/LoginImage.jpg"/></div>
       <div className="col-6 d-flex justify-content-center align-items-center"style={{height:"100%"}}><Outlet/></div>
    </div>
    </div>
  )
}

export default Login
