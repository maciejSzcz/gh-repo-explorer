//search/users
import { useQuery } from "@tanstack/react-query";
import { USERS_PER_PAGE } from "consts";
import type { PagedResponse } from "models/PagedResponse";
import type { User } from "models/User";
import { useState } from "react";
import { request } from "requests/baseRequest";

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
    <main>
      <input
        type="text"
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
      />
      <button onClick={() => refetch()}>Search for users</button>

      {status === "success" && (
        <>
          <p>Showing results for "{userQuery}"</p>
          <ul>
            {data?.items?.map((user) => (
              <li key={user.id}>{user.login}</li>
            )) /*use details in html tag for expandable*/}
          </ul>
        </>
      )}
    </main>
  );
};
