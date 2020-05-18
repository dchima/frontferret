import { GET_ALL_CAPTIONS } from '../actionTypes/captionTypes';

const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_ALL_CAPTIONS: 
      return {
        ...state,
        items: payload.data.captions
      };
    default:
      return state;
  }
};
