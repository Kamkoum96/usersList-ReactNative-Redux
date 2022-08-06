import { ActionTypes } from "../constants/action-type";

export const getUsers = (user) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: user,
  };
};

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  };
};
