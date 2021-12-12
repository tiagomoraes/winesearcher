import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '@components/SearchBar';
import LogoIcon from '@assets/img/logo192.png';
import SearchResults from './components/SearchResults';
import {
  Container,
  TopBar,
  Title,
  InputContainer,
  LogoContainer,
  Logo,
} from './Search.styles';

const Search = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <Container>
      <TopBar>
        <LogoContainer onClick={handleLogoClick}>
          <Logo src={LogoIcon} alt="Ícone" />
          <Title>WineSearcher</Title>
        </LogoContainer>
        <InputContainer>
          <SearchBar />
        </InputContainer>
      </TopBar>
      <SearchResults />
    </Container>
  );
};

export default Search;
