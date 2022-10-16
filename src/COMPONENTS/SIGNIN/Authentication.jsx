import React, { useEffect } from "react";
// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../UTILS/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import "./Authentication.style.scss";

export const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>SIGNIN Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>SIGNIN Google Redirect</button> */}
      <Signin />
      <Signup />
    </div>
  );
};
