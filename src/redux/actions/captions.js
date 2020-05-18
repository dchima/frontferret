import axios from 'utils/axios';
import { GET_ALL_CAPTIONS } from '../actionTypes/captionTypes';

export const getAllCaptions = () => async dispatch => {
  await axios.get('v1.0/api/caption/')
  .then((res) => 
    dispatch({
      type: GET_ALL_CAPTIONS,
      payload: res.data
    })
  );
};