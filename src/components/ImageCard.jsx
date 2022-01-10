import React from 'react';
import styledComponents from 'styled-components';

const ImageDiv = styledComponents.div`
  width: 110px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cove;
`;

const ImageCard = ({ photo }) => {
  return (
    <ImageDiv photo={photo}>
      <p>1</p>
    </ImageDiv>
  );
};
export default ImageCard;
