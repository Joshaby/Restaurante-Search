import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Container, Search, Icon, Wrapper, CarouselTitle, Carousel, ImgDiv } from './styles';
import ImageCard from '../components/ImageCard';
import RestaurantCard from '../components/RestaurantCard';
import Modal from '../components/Modal/Modal';

import logo from '../assets/logo.svg';
import restaurante from '../assets/restaurante.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpen] = useState(true);

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
            <ImageCard photo={restaurante} title="Nome do restaurante" />
            <ImageCard photo={restaurante} title="Nome do restaurante" />
            <ImageCard photo={restaurante} title="Nome do restaurante" />
            <ImageCard photo={restaurante} title="Nome do restaurante" />
            <ImageCard photo={restaurante} title="Nome do restaurante" />
          </Carousel>
        </Search>
        <RestaurantCard photo={restaurante} />
      </Container>
      <Modal open={modalOpened} onClose={() => setModalOpen(!modalOpened)}>
        <div>Oi</div>
      </Modal>
    </Wrapper>
  );
};

export default Home;
