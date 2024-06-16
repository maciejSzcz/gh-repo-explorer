import { styled } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  width: ${(props) => props.theme.appWidth};
  min-height: 48px;
  padding: 1rem 2rem;
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border: 1px solid #44a7df;

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -1px;
  }
`;
