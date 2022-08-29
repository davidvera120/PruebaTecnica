import { candidateTypes } from "../Types/candidateTypes";

export const candidateReducer = ( state = {}, action ) => {
    switch (action.type) {
        case candidateTypes.add:
            return action.payload;

        case candidateTypes.read:
            return {User:action.payload}

        case candidateTypes.delete:
            return state.filter( date => date.email !== action.payload )

        case candidateTypes.edit:
           
            return  action.payload
            
        default:
            return state;
    }
}