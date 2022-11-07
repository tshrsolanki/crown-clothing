import { actions } from "../constant";

export const addItems = (item) => {
  return {
    type: actions.ADD_TO_CART,
    payload: item,
  };
};
export const incItem = (item) => {
  return {
    type: actions.INC_QTY,
    payload: item,
  };
};
export const decItem = (item) => {
  return {
    type: actions.DEC_QTY,
    payload: item,
  };
};
export const delItem = (item) => {
  return {
    type: actions.DELETE_ITEM,
    payload: item,
  };
};
