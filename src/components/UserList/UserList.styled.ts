import { styled } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-top: 10px;
`;

export const ListWrapper = styled.div`
  width: ${(props) => props.theme.appWidth};

  @media screen and (min-width: 768px) {
    width: ${(props) => props.theme.appWidthDesktop};
  }
`;

export const ResultDescription = styled.p`
  margin-top: 8px;
`;
