
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes } from '../Types/candidateTypes'
import { useSelector } from 'react-redux'



//Metodo set (el id lo especifico yo)
export const addCandidate = ( user,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "candidatos")
        await addDoc(colRef, user);
       
            dispatch( addDateSync( user ) )
            
       
    }
}

const addDateSync = ( user ) => {
    return{
    type: candidateTypes.add,
    payload: user
}}

// Leer datos db general ejercicios
export const listaWorkouts = () =>{
    return async (dispatch)=>{
        const ejerciciosCollection = collection(db, "ejercicios")
        const data =await getDocs(ejerciciosCollection)
        console.log(data.docs)
        const ejercicios2=data.docs
    
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejercicios=info;
        console.log(ejercicios)
        dispatch(listaWorksSync(ejercicios))
    }
}
export const listaWorksSync = (Work)=>{
        return{
            type: candidateTypes.read,
            payload: Work
        }
}

// Leer datos usuario subcoleccion
export const listaUser = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "candidates")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const candidatos2=data.docs
        const info=candidatos2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const candidatos=info;
        console.log(candidatos)
        dispatch(listaUser1(candidatos))
    }
}
export const listaUser1 = (users2)=>{
        return{
            type: candidateTypes.read,
            payload: users2
        }
}


// // Leer datos usuario 
// export const DatosUser = () =>{
//     return async (dispatch)=>{
//         const { uid } = useSelector( state => state.login )
//         const colRef=collection(db, "users")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         const filtrado = ejercicios.filter(elemento => elemento.id === uid);
//         dispatch(dataUser(filtrado))
//     }
// }
// export const dataUser = (Work2)=>{
//         return{
//             type: workTypes.read2,
//             payload: Work2
//         }
// }



