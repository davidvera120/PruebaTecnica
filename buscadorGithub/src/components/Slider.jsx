

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




const Slider = () => {


    const {id} = useSelector(state => state.login)
    console.log(id)
    const dispatch = useDispatch();
    const {User} = useSelector(state => state.read)
    console.log(User)
    
    
    const deleteWorkout = async (id2) => {
      const docRef=doc(db, "data", id)
      const colRef=collection(docRef, "candidatos")     
      const workDoc = doc(colRef, id2)
      await deleteDoc(workDoc)
      dispatch( listaUser(id))
    }
    
    useEffect(() => {
      
    dispatch( listaUser(id))
    
    },[dispatch])


    function siguiente() {
        let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
        const slider = document.querySelector("#slider");
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionLast);
            slider.style.marginLeft = "0";
        }, 500);
    }
    
     function anterior() {
        let sliderSection = document.querySelectorAll(".slider__section");
        const slider = document.querySelector("#slider");
        let sliderSectionFirst = sliderSection[sliderSection.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
            slider.style.marginLeft = "0";
        }, 500);
    }

  return (
    <section>
     
    <div className="col-12" Style="margin-top:140px;" >
    <div className="container d-flex" Style="justify-content: center;aling-items:center;">
    <div className="slider__contenedor">
    <div classname="slider" id="slider" Style="background:rgb(46, 53, 98)">

{
  User?.map(elemento=>( 

    <div className="slider__section" Style="background:rgb(46, 53, 98);">
    <TextIntro2>
<div className="col-12 mt-3"Style="background:rgb(46, 53, 98)" >

<div className="row" Style="justify-content: center;aling-items:center;background:rgb(46, 53, 98)">
  
<div className="col-12 ms-3 mt-1 sl">
<div className="container d-flex sl" >
<h5>Nombres:</h5> 
<h6 Style="font-weight:300; margin-top:3px; margin-left:20px">{elemento.name}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="container d-flex sl">
<h5>Apellidos:</h5>
<h6 Style="font-weight:300; margin-top:3px; margin-left:20px"> {elemento.apellidos}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="container d-flex sl">
<h5>Cedula:</h5><h6 Style="font-weight:300; margin-top:4px; margin-left:20px">{elemento.cedula}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="container d-flex sl">
<h5>Fecha de Nacimiento:</h5><h6 Style="font-weight:300; margin-top:4px; margin-left:20px">{elemento.fechaNacimiento}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="container d-flex sl">
<h5>Email:</h5><h6 Style="font-weight:300; margin-top:3px; margin-left:20px" > {elemento.email}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="container d-flex sl">
<h5>Usuario GitHub:</h5><h6 Style="font-weight:300; margin-top:3px; margin-left:20px"> {elemento.usuarioGithub}</h6>
</div>
</div>
<div className="col-12 ms-3 sl">
<div className="row sl">
<div className="col-8 sl">
</div>
<div className="col-4 sl">
<div className="container d-flex sl" Style="align-items:end">
<button Style="margin-right:20px; border:none; color:white; background:none;" onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash' Style="font-size:22px;"></i></button>
<Link to ={`/edit/${elemento.id}`} Style="background:none"><button Style="border:none; background:none;"><i className='bx bx-edit' Style="font-size:22px;color:white"></i></button></Link>
</div>
</div>
</div>
</div>

</div>

</div>
</TextIntro2>
<button  id="btnSiguiente" className="slider__btn slider__btn--right" onClick={()=>{siguiente()}}><i Style="background:none;" className='bx bxs-chevron-right' ></i></button>
<button id="btnAtras" className="slider__btn slider__btn--left" onClick={()=>{anterior()}}><i Style="background:none;" className='bx bxs-chevron-left'></i></button>
</div>
))
}

</div>

</div>              
</div>
</div> 

</section>
  )
}

export default Slider