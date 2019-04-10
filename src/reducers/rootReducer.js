import {combineReducers} from "redux"
import {itemReducer} from "./itemReducers";
import {cartReducer} from "./cartReducers";

export default combineReducers({
    itemReducer,cartReducer
})  