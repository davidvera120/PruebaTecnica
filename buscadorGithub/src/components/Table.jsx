import React, {useEffect, useState} from 'react'
import MUIDataTable from "mui-datatables"
import axios from "axios"
import { Div1, DivNav2, Form1 } from '../styles/Styles1';
import { CollectionsOutlined, ConnectingAirportsOutlined } from '@mui/icons-material';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonHome } from '../styles/PagIntro'


export const Table = () => {



const[candidato, setcandidato]= useState([])
const [usergithub, setusergithub] = useState('');

 const mostrarInfo1 = async(usergit) => {
   axios.get( `https://api.github.com/users/${usergit}/repos`)
   .then(res =>{
       const data=res.data;
       console.log(data)
       setcandidato(data);
       console.log(candidato)
       
   });
}
console.log(usergithub.usergithub)
console.log(candidato)


const columns =[
    {
name:"name",
label:"NAME"

    },
    {
    name:"language",
    label:"LANGUAGE"
    
       },
       {
        name:"html_url",
        label:"URL GITHUB"
        
        },{
        name:"default_branch",
        label:"BRANCH"
            
        },{
        name:"description",
        label:"DESCRIPTION"
                
                }]

const options = {
    filterType: "checkbox",        
    rowsPerPage:[3],
    rowsPerPageOptions:[3,5,10,15,20],
    jumpToPage: true,
    textLabels:{
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF"
      }
    },
    onChangePage (currentPage) {
      console.log({currentPage});
    },
    onChangeRowsPerPage (numberOfRows) {
      console.log({numberOfRows});
    }
  }

  return (
<div className="col-12 mt-5">

<div className="col-12" Style="margin-top:-410px;">
<div className="container d-flex" Style="justify-content: center;aling-items:center;">
<InputContainer className="mb-2 mt-3">
<Input1 type="text" name="name"   onChange={(e) => setusergithub({ ...usergithub, usergithub: e.target.value })} placeholder="Usuario GitHub"/>
</InputContainer>
</div>
</div>
<div className="col-12 mb-3" Style="">
<div className="container d-flex" Style="justify-content: center;aling-items:center;">
<ButtonHome onClick={()=>{mostrarInfo1(usergithub.usergithub)} } >
  <span></span>
  <span></span>
  <span></span>
  <span></span> <i className='bx bx-search'></i>Buscar
</ButtonHome>

</div>
</div>

   <div>
    <MUIDataTable
    title={"Datos candidato"}
    data={candidato}
    columns={columns}
    options={options}
    />
    </div>
    </div>
   
  )
}

export default Table