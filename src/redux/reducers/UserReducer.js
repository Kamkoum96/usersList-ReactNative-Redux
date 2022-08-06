import { ActionTypes } from "../constants/action-type";

const intialState = {
  user: [],
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { ...state, user: payload };
    case ActionTypes.ADD_USER:
      return { ...state, user: [...state.user, payload] };
    default:
      return state;
  }
};
