
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { candidateTypes } from '../Types/candidateTypes'





export const editCandidates = (edituser, id1, id2) => {
    return( dispatch) => {
        
         const editUser=edituser;  
         const docRef=doc(db, "data", id1)
        const colRef=collection(docRef, "candidatos")     
        const workDoc = doc(colRef, id2)
        setDoc(workDoc, editUser)
        .then(resp => {
            dispatch(editCandidate(editUser))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editCandidate = (editUser) => {
     return{
         type: candidateTypes.edit,
         payload: editUser
     }
 
 }


//  //Metodo set (el id lo especifico yo)
// export const editCandidate = ( user,  uid ) => {
//     return async (dispatch) => {
//         const docRef=doc(db, "data", id)
//         const colRef=collection(docRef, "candidatos")     
//         const workDoc = doc(colRef, id2)
//         const docRef=doc(db, "data", uid)
//         const colRef=collection(docRef, "candidatos")
//         await addDoc(colRef, user);
       
//             dispatch( addDateSync( user ) )
            
       
//     }
// }

// const addDateSync = ( user ) => {
//     return{
//     type: candidateTypes.add,
//     payload: user
// }}