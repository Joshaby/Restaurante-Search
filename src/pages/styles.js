import Slider from 'react-slick';
import styledComponents from 'styled-components';

export const Container = styledComponents.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 525px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFF;
  padding: 24px;
`;

export const ImgDiv = styledComponents.div`
  text-align: center;
`;

export const Icon = styledComponents.img`
  padding-bottom: 20px;
`;

export const Wrapper = styledComponents.div`
  display: flex;
  flex-direction: row;
`;

export const Map = styledComponents.div`
  background-color: red;
  width: 500px;
`;

export const CarouselTitle = styledComponents.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styledComponents(Slider)`
  .slick-slider {
    margin-right: 10px;
  }
`;
