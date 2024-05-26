// ** React Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// ** Styles Imports
import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from "./styles";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  // ! props
  const { imageUrl, title, route } = category;

  // ! handler
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
