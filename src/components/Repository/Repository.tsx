import type { Repository as RepositoryType } from "models/Repository";
import { FaStar } from "react-icons/fa";
import { RepositoryCard, RepositoryDescription } from "./Repository.styled";

interface RepositoryProps {
  repository: RepositoryType;
}

interface RepositoryPlaceholderProps {
  text: string;
}

export const Repository = ({ repository }: RepositoryProps) => {
  return (
    <RepositoryCard aria-label="repositoriesListItem">
      <h4>{repository.name}</h4>
      <p>
        {repository.stargazers_count} <FaStar />
      </p>
      <RepositoryDescription>{repository.description}</RepositoryDescription>
    </RepositoryCard>
  );
};

export const RepositoryPlaceholder = ({ text }: RepositoryPlaceholderProps) => (
  <RepositoryCard aria-label="emptyRepositoriesListItem">
    <h4>{text}</h4>
  </RepositoryCard>
);
