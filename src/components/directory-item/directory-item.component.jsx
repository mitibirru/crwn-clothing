import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  return (
    // <Link to={`/shop/${category.title}`}>
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
    // </Link>
  );
};

export default DirectoryItem;
