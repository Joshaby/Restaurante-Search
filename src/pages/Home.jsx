import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Container, Search, Icon } from './style';

import logo from '../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <Icon src={logo} alt="Logo do Restaurante" />
        <TextField label="Pesquisar" outlined>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
