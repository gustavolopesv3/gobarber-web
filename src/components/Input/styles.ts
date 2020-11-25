import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  padding: 16px;
  width: 100%;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
  }
  svg {
    margin-right: 16px;
  }
`;
