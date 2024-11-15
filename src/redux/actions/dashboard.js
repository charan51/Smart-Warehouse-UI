import axios from 'axios';
export const LOWSTOCK_LOADING = 'LOWSTOCK_LOADING';
export const LOWSTOCK_SUCCESS = 'LOWSTOCK_SUCCESS';
export const LOWSTOCK_FAIL = 'LOWSTOCK_FAIL';
const apiHost = "http://localhost:8080" 

export const getLowStockAction =  () => async dispatch => {
  dispatch({
    type: LOWSTOCK_LOADING
  });
  try {
    // api 
    const data = await axios.get(`${apiHost}/api/dashboard/getLowStock`);
    dispatch({
      type: LOWSTOCK_SUCCESS,
      payload: data.data
    });
  }catch(err) {
    dispatch({
      type: LOWSTOCK_FAIL,
      payload: err.message
  });
  }
}