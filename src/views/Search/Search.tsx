//search/users
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "components/Input";
import { SubmitButton } from "components/SubmitButton/SubmitButton";
import UserList, { UserListPlaceholder } from "components/UserList";
import { USERS_PER_PAGE } from "consts";
import type { PagedResponse } from "models/PagedResponse";
import type { User } from "models/User";
import { request } from "requests/baseRequest";
import { SearchWrapper } from "./Search.styled";

export const Search = () => {
  const [userQuery, setUserQuery] = useState("");

  const { data, status, refetch, isLoading } = useQuery<PagedResponse<User>>({
    queryKey: ["users", userQuery],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: () =>
      request(`/api/search/users?q=${userQuery}&per_page=${USERS_PER_PAGE}`),
  });

  const renderUserList = () => {
    switch (status) {
      case "success":
        return <UserList userQuery={userQuery} users={data?.items} />;
      case "pending":
        return isLoading ? <UserListPlaceholder text="Loading..." /> : null;
      case "error":
        return <UserListPlaceholder text="Something went wrong" />;
    }
  };

  return (
    <SearchWrapper>
      <Input
        value={userQuery}
        handleChange={setUserQuery}
        placeholder="Enter username"
        aria-label="username"
        handleSubmit={refetch}
      />
      <SubmitButton handleSubmit={refetch} buttonText="Search" />
      {renderUserList()}
    </SearchWrapper>
  );
};
