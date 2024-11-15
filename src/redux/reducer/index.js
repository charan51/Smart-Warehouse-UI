import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import dashboardReducer from './dashbboard';
const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    dashboard: dashboardReducer
});

export default rootReducer;
