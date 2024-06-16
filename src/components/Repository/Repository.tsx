import type { Repository as RepositoryType } from "models/Repository";
import { FaStar } from "react-icons/fa";
import {
  RepositoryCard,
  RepositoryStarCount,
  RepositoryDescription,
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
      <RepositoryStarCount>
        {repository.stargazers_count} <FaStar />
      </RepositoryStarCount>
      <RepositoryDescription>{repository.description}</RepositoryDescription>
    </RepositoryCard>
  );
};

export const RepositoryPlaceholder = ({ text }: RepositoryPlaceholderProps) => (
  <RepositoryCard aria-label="emptyRepositoriesListItem">
    <RepositoryHeader>{text}</RepositoryHeader>
  </RepositoryCard>
);
