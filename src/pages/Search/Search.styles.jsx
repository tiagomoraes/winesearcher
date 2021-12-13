import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TopBar = styled.div`
  width: 100%;

  padding: 20px 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
`;

export const Logo = styled.img`
  height: 35px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;

  margin-left: 10px;
  margin-bottom: -5px;
`;

export const InputContainer = styled.div`
  margin-left: 40px;
`;

export const ResultsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
