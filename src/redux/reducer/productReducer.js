import {
    BARCODE_SUCCESS,
    BARCODE_FAIL,
    BARCODE_LOADING
  } from "../actions/product";
  
  const initialState = {
    product: {},
    loading: false,
    error: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case BARCODE_LOADING:
        return {
            ...state,
            loading: true
        }
      case BARCODE_SUCCESS:
        return {
          ...state,
          product: {...action.payload},
          loading: false
        };
      case BARCODE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  