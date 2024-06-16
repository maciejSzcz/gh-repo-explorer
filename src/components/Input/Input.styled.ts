import { styled } from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.theme.appWidth};
  min-height: 48px;
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #e7e7e7;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.theme.appWidthDesktop};
  }
`;
