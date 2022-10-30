import { ADD_TO_CART, INC_QTY, DEC_QTY, DELETE_ITEM } from "../constant";

export const addItems = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const incItem = (item) => {
  return {
    type: INC_QTY,
    payload: item,
  };
};
export const decItem = (item) => {
  return {
    type: DEC_QTY,
    payload: item,
  };
};
export const delItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};
