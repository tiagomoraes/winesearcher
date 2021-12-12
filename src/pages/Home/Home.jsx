import React from 'react';
import LogoIcon from '@assets/img/logo192.png';
import SearchBar from '@components/SearchBar/SearchBar';
import { Container, Content, LogoContainer, Logo, Title } from './Home.styles';

const Home = () => (
  <Container>
    <Content>
      <LogoContainer>
        <Logo src={LogoIcon} alt="Ícone" />
        <Title>WineSearcher</Title>
      </LogoContainer>
      <SearchBar />
    </Content>
  </Container>
);

export default Home;
