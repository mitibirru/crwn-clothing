import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, idx) => (
        <CategoryItem key={idx} category={category} />
      ))}
    </div>
  );
};

export default Directory;
