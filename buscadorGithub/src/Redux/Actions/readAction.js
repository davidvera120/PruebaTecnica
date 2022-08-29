
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes } from '../Types/candidateTypes'

// Leer datos usuario subcoleccion
export const listaUser = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "data", uid)
        const colRef=collection(docRef, "candidatos")
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