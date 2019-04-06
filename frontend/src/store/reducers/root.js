import {combineReducers} from 'redux';
import productListReducer from "./product-list";
import productDetailReducer from "./product-detail"
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    login: loginReducer,
    auth: authReducer,
    app: tokenLoginReducer,

});

export default rootReducer;