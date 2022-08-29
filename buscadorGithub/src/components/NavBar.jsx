import React from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import Cookies from 'universal-cookie';

 export const NavBar = () => {

    const user  = useSelector( state => state.login)
    const name=user.name;
    const id1=user.id;
    const cookies=new Cookies();
    cookies.set('nombreUser',name, {path:'/'})
    cookies.set('idUser', id1, {path:'/'})
   

    const logOut = () => {
   
        signOut(auth);
    }

        return (
            

            <div className="col-12 fixed-top mt-3" >
            <div className="row" >
            <NavBarStyled>
            <div className="col-3" Style="text-align:center; margin-left:-10px;background:rgb(46, 53, 98)">
            <h1 Style="font-size:16px; font-weight:bold;">Bienvenido,</h1>
            <h6 Style="font-weight:400;">{name}</h6>
            </div>
            <div className="col-2" Style="text-align:center; margin-left:0px;background:rgb(46, 53, 98)">
            <Link to="/home1" Style="text-decoration:none;">
            <h5 >Inicio</h5>
            </Link>
            </div>
            <div className="col-2" Style="text-align:center; margin-left:0px; background:rgb(46, 53, 98)">
           <Link to="/new" Style="text-decoration:none;">
           <h5 >Registro</h5>
           </Link>
           </div>
           <div className="col-3" Style="text-align:center; margin-left:0px;background:rgb(46, 53, 98)">
          <button Style="border:none; color: #B0C3FD;background:rgb(46, 53, 98)" onClick={()=>{logOut()}}>
          <i className='bx bx-log-out' Style="margin:5px;"></i><span Style="font-size:14px;">Cerrar Sesion</span>
          </button>
           </div>
           
            <div className="col-2" Style="text-align:center; margin-left:0px;background:rgb(46, 53, 98)">
            <i className='bx bxl-github'Style="margin-left:40px;font-size:35px;color:#2BE7E8"></i>
            </div>
            
            </NavBarStyled>
            
            </div>
            </div>

        );
    }


export default NavBar;