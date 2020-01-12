import { GET_ALL_CAPTIONS } from '../actionTypes/captionTypes';

export const getAllCaptions = () => async dispatch => {
  fetch('https://capcards-api.herokuapp.com/v1.0/api/caption/')
  .then((res) => res.json())
  .then((response) =>
    dispatch({
      type: GET_CAPTIONS,
      payload: response.data.captions
    })
  );
};