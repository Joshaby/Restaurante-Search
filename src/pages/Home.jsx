import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Container, Search, Icon, Wrapper, Map } from './style';

import logo from '../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
      <Container>
        <Search>
          <Icon src={logo} alt="Logo do Restaurante" />
          <TextField
            label="Pesquisar restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
