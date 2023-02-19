import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  return (
    <DirectoryItemContainer onClick={() => navigate(category.route)}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
