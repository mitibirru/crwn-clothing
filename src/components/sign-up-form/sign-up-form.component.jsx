import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createuserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormError from "../form-error/form-error.component";
import FormInputComponent from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [signinError, setSigninError] = useState();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setSigninError();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setSigninError("passwords doesn't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createuserDocumentFromAuth(user, { displayName });
      resetFormFields();
      
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setSigninError("Cannot create user, email already exists");
      } else console.log("user creation failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      {signinError && (
        <FormError label={signinError} onClose={() => setSigninError()} />
      )}
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInputComponent
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInputComponent
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInputComponent
          label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
