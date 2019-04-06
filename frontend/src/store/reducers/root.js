import {combineReducers} from 'redux';
import productListReducer from "./product-list"

const rootReducer = combineReducers({
    productList: productListReducer

});

export default rootReducer;