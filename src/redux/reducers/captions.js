import { GET_ALL_CAPTIONS } from '../actionTypes/captionTypes';

const initialState = {
  captions: []
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_ALL_CAPTIONS: 
      return {
        ...state,
        captions: payload
      };
    default:
      return state;
  }
};
