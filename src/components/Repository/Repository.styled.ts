import { styled } from "styled-components";

export const RepositoryCard = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-gap: 6px;
  max-width: ${(props) => props.theme.appWidth};
  min-height: 80px;
  margin: 8px 0px 8px 8px;
  background-color: #e0e0e0;
  padding: 14px;

  @media screen and (min-width: 768px) {
    max-width: ${(props) => props.theme.appWidthDesktop};
  }
`;

export const RepositoryStarCount = styled.p``;

export const RepositoryDescription = styled.p`
  word-wrap: break-word;
  grid-column: 1 / 3;
`;

export const RepositoryHeader = styled.h4``;
