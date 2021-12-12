import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 520px;
  width: 80%;
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;

  margin-left: 10px;
  margin-bottom: -10px;
`;
