import {
  LOWSTOCK_FAIL,
  LOWSTOCK_SUCCESS,
  LOWSTOCK_LOADING,
} from "../actions/dashboard";

const initialState = {
  lowstock: [],
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOWSTOCK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOWSTOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        lowstock: action.payload,
      };
    case LOWSTOCK_FAIL:
      return {
        ...state,
        loading: false,
        lowstock: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
