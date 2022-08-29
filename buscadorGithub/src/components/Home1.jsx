
import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';
import { ButtonIntro1, Container1, TextIntro2, ButtonHome} from '../styles/PagIntro'
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import { listaUser} from '../Redux/Actions/readAction';
import { useSelector, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Table from "../components/Table"
import Slider from "../components/Slider"
import FiltroCrud from "../components/FiltroCrud"
import Cookies from 'universal-cookie'


export const Home1 = () => {

   
const {id} = useSelector(state => state.login)
console.log(id)
const dispatch = useDispatch();
const {User} = useSelector(state => state.read)
console.log(User)
const user2  = useSelector( state => state.add )
console.log(user2)
const cookies=new Cookies();

cookies.set('info',user2, {path:'/'})

console.log()
useEffect(() => {
  
dispatch( listaUser(id))

},[dispatch])

  return (
    <section>
    <div className="col-12">
    <div className="row">    
<NavBar />

<div className="col-12">
<div className="row">
<div className="col-6">
<FiltroCrud />
</div>
<div className="col-6">
<Slider />
</div>
</div>
</div>
<div className="col-12">
<Table />
<div className="col-12 mt-5">
<h2>cookies Login usuario</h2>
<h4> nombre user: {cookies.get('nombreUser')}</h4>
<h4> id user: {cookies.get('idUser')}</h4>
<h2>cookies formulario registro</h2>
<h4> nombre : {cookies.get('name')}</h4>
<h4> apellidos: {cookies.get('apellidos')}</h4>
<h4> cedula: {cookies.get('cedula')}</h4>
<h4> fecha de nacimiento: {cookies.get('fechaN')}</h4>
<h4> email: {cookies.get('email')}</h4>
<h4> user GitHub: {cookies.get('usergithub')}</h4>
</div>
</div>
</div>
</div>

</section>
  )
}

