/* 
default

inverted

google-sign-in
*/

import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, rightImg=null, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
      {rightImg && rightImg}
    </button>
  );
};

export default Button;
