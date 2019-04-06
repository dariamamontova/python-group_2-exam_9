import {PRODUCTS_URL, CATEGORIES_URL} from "../../api-urls";
import axios from "axios";

export const PRODUCT_DETAIL_REQUEST_SUCCESS = "MOVIE_DETAIL_REQUEST_SUCCESS";
export const CATEGORIES_REQUEST_SUCCESS = "CATEGORIES_REQUEST_SUCCESS";

export const loadProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + id).then(response => {
            console.log(response.data);
            return dispatch({type: PRODUCT_DETAIL_REQUEST_SUCCESS, product: response.data});
        }).catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};


