import {PRODUCT_DETAIL_REQUEST_SUCCESS, CATEGORIES_REQUEST_SUCCESS} from "../actions/product-detail";

const initialState = {
    product: null
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST_SUCCESS:
            return {...state, product: action.product};
        default:
            return state;
    }
};

export default productDetailReducer;