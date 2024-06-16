import type { Repository as RepositoryType } from "models/Repository";
import {
  RepositoryCard,
  RepositoryDetail,
  RepositoryHeader,
} from "./Repository.styled";

interface RepositoryProps {
  repository: RepositoryType;
}

interface RepositoryPlaceholderProps {
  text: string;
}

export const Repository = ({ repository }: RepositoryProps) => {
  return (
    <RepositoryCard aria-label="repositoriesListItem">
      <RepositoryHeader>{repository.name}</RepositoryHeader>
      <RepositoryDetail>{repository.stargazers_count}</RepositoryDetail>
      <RepositoryDetail>{repository.description}</RepositoryDetail>
    </RepositoryCard>
  );
};

export const RepositoryPlaceholder = ({ text }: RepositoryPlaceholderProps) => (
  <RepositoryCard aria-label="emptyRepositoriesListItem">
    <RepositoryHeader>{text}</RepositoryHeader>
  </RepositoryCard>
);
