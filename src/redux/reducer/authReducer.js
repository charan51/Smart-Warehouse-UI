import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/login";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("authToken");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
