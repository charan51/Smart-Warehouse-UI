import axios from 'axios';
export const BARCODE_LOADING = 'BARCODE_LOADING';
export const BARCODE_SUCCESS = 'BARCODE_SUCCESS';
export const BARCODE_FAIL = 'BARCODE_FAIL';
const apiHost = "http://localhost:8080" 
export const searchBarcode = (barcode) => async dispatch => {
    dispatch({
        type: BARCODE_LOADING
    });
    try {
      
        const res = await axios.get(`${apiHost}/api/products/getByBarCode/${barcode}`);
        dispatch({
            type: BARCODE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: BARCODE_FAIL,
            payload: err.response.data
        });
    }
};
