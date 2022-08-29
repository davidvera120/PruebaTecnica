
import { DivCard2, DivPadre } from '../styles/Styles1';
import {Link} from 'react-router-dom'
import portada from '../images/portada.png'
import React from 'react'

export const Home = () => {
  return (

    <div className="col-12" Style="margin-top:-200px">
    <div className="container d-flex" Style="justify-content: center;aling-items:center;">
    <Link to="/login">
   <img Style="height:400px;" src={portada} alt=""/>
   </Link>
    </div>
    </div>
   
 
  )
}



