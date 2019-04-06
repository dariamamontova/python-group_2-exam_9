import axios from "axios";
import {PRODUCTS_URL} from "../../api-urls";

export const ADD = 'ADD';

export const addProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + id).then(response => {
            console.log(response.data);
            return dispatch({type: ADD, products: response.data});
        }).catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};
