import {ADD} from "../actions/basket";
import {PRODUCT_DETAIL_REQUEST_SUCCESS} from "../actions/product-detail";

const initialState = {
    products: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST_SUCCESS:
            return {...state, products: action.product};
        default:
            return state;
    }
};

export default basketReducer;