import styled from 'styled-components';
import { AutoComplete } from 'antd';

export const Container = styled.div`
  width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Suggestions = styled(AutoComplete)`
  width: 300px;
`;
