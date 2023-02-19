/* 
default

inverted

google-sign-in
*/

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const ButtonComponents = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };

  return ButtonComponents[buttonType];
};

const Button = ({ children, buttonType, rightImg = null, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
      {rightImg && rightImg}
    </CustomButton>
  );
};

export default Button;
