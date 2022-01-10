import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Container, Search, Icon, Wrapper, CarouselTitle, Carousel, ImgDiv } from './styles';
import ImageCard from '../components/ImageCard';

import logo from '../assets/logo.svg';
import restaurante from '../assets/restaurante.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <ImgDiv>
            <Icon src={logo} alt="Logo do Restaurante" width="300" />
          </ImgDiv>
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
          </Carousel>
        </Search>
      </Container>
    </Wrapper>
  );
};

export default Home;
