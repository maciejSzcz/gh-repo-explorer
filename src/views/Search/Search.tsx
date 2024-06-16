//search/users
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "components/Input";
import { SubmitButton } from "components/SubmitButton/SubmitButton";
import UserList from "components/UserList";
import { USERS_PER_PAGE } from "consts";
import type { PagedResponse } from "models/PagedResponse";
import type { User } from "models/User";
import { request } from "requests/baseRequest";
import { SearchWrapper } from "./Search.styled";

export const Search = () => {
  const [userQuery, setUserQuery] = useState("");

  const { data, status, refetch } = useQuery<PagedResponse<User>>({
    queryKey: ["users"],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: () =>
      request(`/api/search/users?q=${userQuery}&per_page=${USERS_PER_PAGE}`),
  });

  return (
    <SearchWrapper>
      <Input
        value={userQuery}
        handleChange={setUserQuery}
        placeholder="Enter username"
        aria-label="username"
      />
      <SubmitButton handleSubmit={refetch} buttonText="Search" />
      {status === "success" && (
        <UserList userQuery={userQuery} users={data?.items} />
      )}
    </SearchWrapper>
  );
};
