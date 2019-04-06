import {combineReducers} from 'redux';
import productListReducer from "./product-list";
import productDetailReducer from "./product-detail"
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import basketReducer from "./basket"

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    login: loginReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    basket: basketReducer

});

export default rootReducer;