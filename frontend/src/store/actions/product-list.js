import axios from "axios";
import {PRODUCTS_URL} from "../../api-urls";

export const PRODUCT_LIST_REQUEST_SUCCESS = "PRODUCT_LIST_REQUEST_SUCCESS";


export const loadProducts = () => {
    return dispatch => {
        console.log('I am here');
        // dispatch({type: PRODUCT_LIST_REQUEST_SUCCESS, products: []});
        return axios.get(PRODUCTS_URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: PRODUCT_LIST_REQUEST_SUCCESS, products: response.data});
            })
            .catch(error => console.log(error));
    }
};