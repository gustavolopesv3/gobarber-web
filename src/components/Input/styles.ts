import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFileed: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  padding: 16px;
  width: 100%;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) =>
    props.isFileed &&
    css`
      color: #ff9000;
    `}

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
