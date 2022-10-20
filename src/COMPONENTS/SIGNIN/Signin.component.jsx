import React, { useState } from "react";
import { Forminput } from "../FORM_INPUT/Forminput.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../UTILS/firebase.utils";
import "./Signin.style.scss";
import { Button, BUTTON_CLASSES } from "../BUTTON/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export const Signin = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Forminput
          label="Email"
          type="email"
          value={email}
          required
          onChange={handleChange}
          name="email"
          autoComplete="off"
        />

        <Forminput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="off"
        />
        <div className="buttons-container">
          <Button buttonType={BUTTON_CLASSES.base} type="submit">
            SIGNIN
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};
