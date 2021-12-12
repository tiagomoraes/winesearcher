import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled(Card)`
  width: 300px;
  margin: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;

  .ant-card-head {
    max-width: 100%;
  }
`;

export const Label = styled.p`
  font-weight: 300;
  font-size: 1rem;
`;

export const LabelTitle = styled.span`
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;
