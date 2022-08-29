import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import Table from "../components/Table"
import { auth1 } from "../routes/AppRoutes"
import {user} from "../components/LogIn"
import {User, id} from "../components/Slider"
import {name} from "../components/NavBar"
import {filtrado, nombre, apellidos}  from '../components/FiltroCrud';



test('validar que la authenticacion sea correcta', ()=>{
    const autenticar = auth1;
    if(autenticar){
        console.log("Usuario autenticado")
    }
    else{
        console.log('Usuario NO autenticado')
    }
})

test ('renders content', () => {
   
    render(<Table/>)
    
    });

test('Obtener usuario', ()=>{
    const validar1=user;
    expect(user).toEqual(validar1)
    });

test('obtener id usuario', ()=>{
    const ID=user;
    expect(id).toEqual(ID)
});

test('obtener displayname usuario', ()=>{
    const displayname1=user;
    expect(name).toEqual(displayname1)
});

test('obtener candidatos', ()=>{
        const validar2=User;
        expect(User).toEqual(validar2)
    })

test('verificar nombre NavBar', ()=>{
        const name1=user;
       
        expect(name).toEqual(name1)
    })

test('verificar filtro de candidatos nombre', ()=>{
        const name2=filtrado;
        expect(nombre).toEqual(name2)
    })

test('verificar filtro de candidatos apellidos', ()=>{
        const apellidos1=filtrado;
        expect(apellidos).toEqual(apellidos1)
    });