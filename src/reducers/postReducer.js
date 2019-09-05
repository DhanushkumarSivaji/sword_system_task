import { FetchPosts, NameOption , skillOption ,countryOption  } from '../actions/types';

const initialState = {
  items: [],
  names:[],
  skills:[],
  country:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FetchPosts:
      return {
        ...state,
        items: action.payload
      };

    case NameOption:
      return {
        ...state,
        names: action.payload
      };

    case skillOption:
        return {
          ...state,
          skills: action.payload
        };

    case countryOption:
          return {
            ...state,
            country: action.payload
          };

    default:
      return state;
  }
}
