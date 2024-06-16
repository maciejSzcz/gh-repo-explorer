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
    outline: 2px solid #000;
    outline-offset: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: #dcdcdc;
  }

  @media screen and (min-width: 768px) {
    width: ${(props) => props.theme.appWidthDesktop};
  }
`;
