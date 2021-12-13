import styled from 'styled-components';
import { Pagination } from 'antd';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
`;

export const Count = styled.p`
  font-size: 1rem;
  margin-left: 10px;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  flex-wrap: wrap;
`;

export const PageSelector = styled(Pagination)`
  margin: 0 auto;
  padding-top: 50px;
`;
