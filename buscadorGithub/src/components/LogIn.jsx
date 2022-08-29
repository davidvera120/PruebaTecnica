
import "../Global.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonIntro1, Body } from '../styles/PagIntro'
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import portada from '../images/portada.png'

import { loginGoogle, LoginWithEmail, loginFacebook } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';

export function LogIn() {



  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();



  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(LoginWithEmail(user.email, user.password, user.uid))
      const cookies=new Cookies();
      cookies.set('idUsuario',user.uid, {path:'/'})
      cookies.set('emailUsuario',user.email, {path:'/'})
     
  }

  const handleGoogle = () => {
      dispatch(loginGoogle())
      const cookies=new Cookies();
      cookies.set('idUsuario',user.uid, {path:'/'})
      cookies.set('emailUsuario',user.email, {path:'/'})
  }

  const handleFacebook = () => {
    dispatch(loginFacebook())
    const cookies=new Cookies();
    cookies.set('idUsuario',user.uid, {path:'/'})
    cookies.set('emailUsuario',user.email, {path:'/'})
}




  return (
<section>
    <div className="col-12" >
   <div className="row">
      <div className="col-12" Style="margin-top:-70px;">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
      <img Style="height:400px; background:none;" src={portada} alt=""/>
      </div>
      </div>
    
       
      <div className="col-12 mt-5" >
      <div className="container" Style="text-align:center">
      <TextIntro>
      <div className="col-12">
      <h2 Style="color:white">Welcome back</h2>
      </div>
     </TextIntro>
     </div>
    </div>


    <div className="col-12">
    <div className="row">
    <Singupfrm>
      <Form onSubmit={handleSubmit}>
        <InputContainer className="mb-3 mt-3">
        <Label htmlFor="email">Email</Label>
        <Input1 type="email" name="email"  onChange={handleChange} placeholder="youremail@gmail.com"/>
        </InputContainer>
        <InputContainer className="mb-2">
          <Label htmlFor="password">Password</Label>
          <Input1  type="password" name="password" onChange={handleChange} 
            placeholder="*************"/>
        </InputContainer>

        <div className="col-12">
        <div className="row">
           <div className="container" Style="text-align: center;">
                <ButtonIntro1 >
                sing in
              
                </ButtonIntro1>
          </div>
        </div>
        </div>
        </Form>
        </Singupfrm>
          </div>
          </div>


<div className="col-12  mt-2">
<div className="container" Style="text-align:center">
<a href="#!" Style="font-weight:400; font-size:12px; color:white; text-decoration:none; background:none" >
 Forgot Password?
</a>
</div>  
</div>   

      <div className="col-12">
      <div className="container d-flex" Style="text-align:center; justify-content:center; margin-top:30px; font-size:20p; aling-items:center">
    <h1 Style="color:white">Sing In With</h1>
      </div>
      </div>
      
   
      
     <div className="col-12" Style="margin-top:20px">
     <div className="container d-flex" Style="justify-content: center;aling-items:center">
     <button onClick={handleGoogle} Style="border:none; margin-left:20px;">
     <img Style="height:60px; width:60px; background:#1F233E" src={logogoogle} alt=""/>
     </button>
     
     <button onClick={handleFacebook}  Style="border:none">
     <img Style="height:60px; background:#1F233E;" src={logofb} alt=""/>
     </button>
     </div>
     </div>


      <div className="col-12">
      <div className="container" Style="margin-top:40px; font-weight:400; font-size:16px; text-align:center;">
      <span Style="color:white">Dont have account?</span>
      <Link to="/singup" Style="color:#2250CC; margin-left:10px; text-decoration:none;background:#1F233E">
        Sing up
      </Link>
      </div>
      </div>
     
    </div>
    </div>
    </section>
    
  );
}