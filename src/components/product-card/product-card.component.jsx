import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { price, name, id, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItemToCart(product)} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
