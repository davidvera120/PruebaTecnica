import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import thunk from "redux-thunk";
import { candidateReducer } from "../Reducers/workReducer";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
    add: candidateReducer,
    read:candidateReducer,
    edit:candidateReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)