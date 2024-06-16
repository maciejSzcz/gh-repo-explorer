import { styled } from "styled-components";

export const RepositoryCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 30px;
  max-width: ${(props) => props.theme.appWidth};
  min-height: 80px;
  margin: 8px 0px 8px 8px;
  background-color: #e0e0e0;
  padding: 10px 4px;
`;

export const RepositoryDetail = styled.p`
  word-wrap: break-word;
`;

export const RepositoryHeader = styled.h4``;
