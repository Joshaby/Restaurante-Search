import React from 'react';
import styledComponents from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const RestaurantDiv = styledComponents.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #FFF;
  border-left: 5px solid transparent;
  :hover {
    border-left-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background}
  }
`;

const RestaurantInfo = styledComponents.div`
  display: flex;
  flex-direction: column;
`;

const Title = styledComponents.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 10px;
`;

const Address = styledComponents.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const RestaurantPhoto = styledComponents.img`
  width: 120px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const RestaurantCard = ({ photo }) => {
  return (
    <RestaurantDiv>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
        <Address>Rua Aurealuz Maciel de Lima, 184</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={photo} alt="Foto restaurante" />
    </RestaurantDiv>
  );
};

export default RestaurantCard;
