import { http, HttpResponse } from "msw";

import { usersResponse } from "tests/fixtures/usersResponse";
import { repositoryResponse } from "tests/fixtures/repositoriesResponse";

const usersHandler = http.get(`/api/search/users`, () => {
  return HttpResponse.json(usersResponse);
});

const repositoriesHandler = http.get(`/api/users/:login/repos`, () => {
  return HttpResponse.json(repositoryResponse);
});

export const handlers = [usersHandler, repositoriesHandler];
