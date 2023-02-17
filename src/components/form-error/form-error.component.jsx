import { AiOutlineClose } from "react-icons/ai";
import "./form-error.styles.scss"

const FormError = ({label, onClose}) => {
  return (
    <div className="error">
      <p>{label}</p>
      <AiOutlineClose
        cursor="pointer"
        onClick={onClose}
        size={16}
        color="white"
      />
    </div>
  );
};

export default FormError;
