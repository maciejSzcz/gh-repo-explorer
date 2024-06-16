import type { PagedResponse } from "models/PagedResponse";
import type { User } from "models/User";

export const usersResponse: PagedResponse<User> = {
  total_count: 2,
  incomplete_results: false,
  items: [
    {
      login: "msz",
      id: 1,
      node_id: "gf&jdud12",
      url: "",
      type: "",
      site_admin: false,
      score: 454,
      avatar_url: "",
      gravatar_id: "",
    },
  ],
};

export const emptyUsersResponse: PagedResponse<User> = {
  total_count: 0,
  incomplete_results: false,
  items: [],
};
