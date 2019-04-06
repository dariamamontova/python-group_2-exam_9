import {ADD} from "../actions/basket";

const initialState = {
    products: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, products: action.products};
        default:
            return state;
    }
};

export default basketReducer;