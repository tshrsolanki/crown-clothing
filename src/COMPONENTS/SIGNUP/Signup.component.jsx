import React, { useState } from "react";
import { Forminput } from "../FORM_INPUT/Forminput.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../UTILS/firebase.utils";
import "./Signup.style.scss";
import { Button, BUTTON_CLASSES } from "../BUTTON/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("email already in use");
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Forminput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          autoComplete="off"
        />

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

        <Forminput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="off"
        />
        <Button buttonType={BUTTON_CLASSES.google} type="submit">
          SIGNUP
        </Button>
      </form>
    </div>
  );
};
