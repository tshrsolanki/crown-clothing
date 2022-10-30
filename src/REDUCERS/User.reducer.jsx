import { useEffect } from "react";
import { SET_USER } from "../constant";
import { usedispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../UTILS/firebase.utils";

const initialUser = null;

export const setUsers = (state = initialUser, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

const dispatch = usedispatch();
useEffect(() => {
  const unsubscribe = onAuthStateChangedListener(async (user) => {
    if (user) {
      await createUserDocumentFromAuth(user);
    }
    dispatch(setUsers(user));
    return unsubscribe;
  });
}, []);
