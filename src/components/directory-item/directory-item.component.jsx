import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    // <Link to={`/shop/${category.title}`}>
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="body">
        <h2>{category.title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
    // </Link>
  );
};

export default DirectoryItem;
