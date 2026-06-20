import { useState, useRef } from 'react'
import { Eye, EyeOff} from 'lucide-react';
// import axios from 'axios';

import '../style/Login&SignUp.css';
import {signUpHandar, loginHandar} from '../../store/LoginData'
import { useNavigate } from 'react-router-dom';


const LoginSignUp = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userName= useRef();
  const Name = useRef();
  const userNumber = useRef();
  const userMail= useRef();
  const userPassword= useRef();
  const navigate = useNavigate();


  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    const nameVal = userName.current.value;
    const yourName = Name.current.value;
    const numberVal = userNumber.current.value;
    const mailVal = userMail.current.value;
    const passwordVal = userPassword.current.value;
    userName.current.value = "";
    userNumber.current.value = "";
    userMail.current.value = "";
    userPassword.current.value = "";
    Name.current.value = "";
    if(nameVal==""||numberVal==""||mailVal==""||passwordVal==""||yourName===""){
      alert("enter filed");
    }else{
      signUpHandar(nameVal, yourName, numberVal, mailVal, passwordVal,setIsLogin);
    }
   
    };

    const handleSubmitLogin = async(e) => {
      e.preventDefault();
      const nameVal = userName.current.value;
      const passwordVal = userPassword.current.value;
      userName.current.value = "";
      userPassword.current.value = "";
      loginHandar(nameVal, passwordVal,navigate);
    };

    
 
  return (
    <>
      <div className='main-container'>
        <div className="container">
          {isLogin === true ? (
            <div className="login-container" >
              <form className="login-form" onSubmit={handleSubmitLogin}>
                <h2>Login</h2>
                <div className="input-group">
                  <label>UserName</label>
                  <input ref={userName} type="text" placeholder="Enter UserName"/>
                </div>
                <div className="input-group password-group">
                  <label>Password</label>
                  <input ref={userPassword} type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                  <span className="show-hide" onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <EyeOff />: <Eye />}
                  </span>
                </div>
                <button type="submit" className="login-btn"> Login </button>
                <p className="signup-link">
                  Don't have an account? <span onClick={()=>setIsLogin(false)}>Sign Up</span>
                </p>
              </form>    
            </div>
          ):(
            <div className="login-container" >
              <form className="login-form" onSubmit={handleSubmitSignUp}>
                <h2>Sign Up</h2>
                <div className="input-group">
                  <label>UserName</label>
                  <input ref={userName} type="text" placeholder="Enter UserName"/>
                </div>
                <div className="input-group">
                  <label>Name</label>
                  <input ref={Name} type="text" placeholder="Enter Your Name"/>
                </div>
                <div className="input-group">
                  <label>Number</label>
                  <input ref={userNumber} type="text" placeholder="Enter your Mobile No."/>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input ref={userMail} type="email" placeholder="Enter your email"/>
                </div>
                <div className="input-group password-group">
                  <label>Password</label>
                  <input ref={userPassword} type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                  <span className="show-hide" onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <EyeOff />: <Eye />}
                  </span>
                </div>
                <button type="submit" className="login-btn"> Sign Up </button>
                <p className="signup-link">
                  Don't have an account? <span onClick={()=>setIsLogin(true)}>Login</span>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>


    
    </>
    
  )
}

export default LoginSignUp;