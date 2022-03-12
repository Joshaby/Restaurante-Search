import React from 'react';
import styledComponents from 'styled-components';

const ImageDiv = styledComponents.div`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cove;
`;

const Title = styledComponents.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #FFF;
  font-size: 16px;
  margin: 8px;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <ImageDiv photo={photo}>
      <Title>{title}</Title>
    </ImageDiv>
  );
};
export default ImageCard;
