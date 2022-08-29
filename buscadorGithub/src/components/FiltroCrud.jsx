import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome, TextIntro2 } from '../styles/PagIntro'






export const FiltroCrud = () => {
    const [nombre, setnombre] = useState('');
    const [apellidos, setapellidos] = useState('');
    const [filtrado, setfiltrado]= useState([])
const {User}=useSelector(state=>state.read)
console.log(User)


const filtroInfo1 = async(nombres1, apellidos1) => {
    const filtrado1 = User.filter((elemento) =>{
        return elemento.name===nombres1 || elemento.apellidos===apellidos1 || (elemento.name===nombres1 && elemento.apellidos===apellidos1)
    });
    setfiltrado(filtrado1)
 }
 console.log(filtrado)

 
  return (
    <section>
<div className="col-12" Style="margin-top:-100px">
<div className="row">

<Singupfrm>

<Form >
<InputContainer className="mb-2 mt-3">
<Label htmlFor="name">Nombres</Label>
<Input1 type="text" name="name"   onChange={(e) => setnombre({ ...nombre, nombre: e.target.value })} placeholder="nombres"/>
</InputContainer>
<InputContainer className="mb-3 mt-3">
<Label htmlFor="descripcion">Apellidos</Label>
<Input1 type="text" name="descripcion"   onChange={(e) => setapellidos({ ...apellidos, apellidos: e.target.value })}placeholder="apellidos"/>
</InputContainer>
</Form>
    </Singupfrm>
<div className="col-12 mb-3">
<div className="container d-flex" Style="justify-content: center;aling-items:center;">
<ButtonHome onClick={()=>{filtroInfo1(nombre.nombre, apellidos.apellidos)} }>
  <span></span>
  <span></span>
  <span></span>
  <span></span> <i className='bx bx-search'></i>Buscar
</ButtonHome>

</div>
</div>

<div className="col-12" Style="justify-content:center; text-align:center; background:none">

{
    filtrado.map(elemento=>( 
<TextIntro2>
<div className="col-12 mt-3" Style="justify-content:center; text-align:center; margin-left:100px" >


  
<div className="col-12 ms-3 mt-1">
<div className="container d-flex" >
<h5>Nombres:</h5> 
<h6 Style="font-weight:300; margin-top:3px; margin-left:20px">{elemento.name}</h6>
</div>
</div>
<div className="col-12 ms-3">
<div className="container d-flex">
<h5>Apellidos:</h5>
<h6 Style="font-weight:300; margin-top:3px; margin-left:20px"> {elemento.apellidos}</h6>
</div>
</div>
<div className="col-12 ms-3">
<div className="container d-flex">
<h5>Cedula:</h5><h6 Style="font-weight:300; margin-top:4px; margin-left:20px">{elemento.cedula}</h6>
</div>
</div>
<div className="col-12 ms-3">
<div className="container d-flex">
<h5>Fecha de Nacimiento:</h5><h6 Style="font-weight:300; margin-top:4px; margin-left:20px">{elemento.fechaNacimiento}</h6>
</div>
</div>
<div className="col-12 ms-3">
<div className="container d-flex">
<h5>Email:</h5><h6 Style="font-weight:300; margin-top:3px; margin-left:20px" > {elemento.email}</h6>
</div>
</div>
<div className="col-12 ms-3">
<div className="container d-flex">
<h5>Usuario GitHub:</h5><h6 Style="font-weight:300; margin-top:3px; margin-left:20px"> {elemento.usuarioGithub}</h6>
</div>
</div>
</div>
</TextIntro2>
))
}

</div>

</div>
</div>
</section>
  )
}

export default FiltroCrud



