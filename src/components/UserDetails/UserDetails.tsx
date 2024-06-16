import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Repository as RepositoryType } from "models/Repository";
import { request } from "requests/baseRequest";
import Repository, { RepositoryPlaceholder } from "components/Repository";
import { ToggleExpandButton, ToggleIcon } from "./UserDetails.styled";
interface UserDetailsProps {
  login: string;
}

export const UserDetails = ({ login }: UserDetailsProps) => {
  const [expanded, setExpanded] = useState(false);
  const { data, status } = useQuery<RepositoryType[]>({
    queryKey: ["repos", login],
    enabled: expanded,
    queryFn: () => request(`/api/users/${login}/repos`),
  });

  const renderRepositories = () => {
    switch (status) {
      case "success":
        return (
          <ul aria-label="repositoriesList">
            {data.length > 0 ? (
              data?.map((repository) => (
                <Repository repository={repository} key={repository.id} />
              ))
            ) : (
              <RepositoryPlaceholder text="No public repositories available" />
            )}
          </ul>
        );
      case "pending":
        return <RepositoryPlaceholder text="Loading..." />;
      case "error":
        return <RepositoryPlaceholder text="Something went wrong" />;
    }
  };

  return (
    <div>
      <ToggleExpandButton
        onClick={() => setExpanded((prev) => !prev)}
        aria-label="expandRepository"
      >
        <p>{login}</p>
        <ToggleIcon $expanded={expanded} size="16" />
      </ToggleExpandButton>
      {expanded && renderRepositories()}
    </div>
  );
};
