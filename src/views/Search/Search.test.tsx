import userEvent, { type UserEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { http, HttpResponse, delay } from "msw";
import type { ReactElement } from "react";

import { render, screen } from "tests";
import { server } from "tests/msw/server";

import { Search } from "./Search";
import { emptyUsersResponse } from "tests/fixtures/usersResponse";
import { emptyRepositoryResponse } from "tests/fixtures/repositoriesResponse";

const setup = (component: ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

const inputUsernameAndSubmit = async (user: UserEvent, username: string) => {
  await user.type(screen.getByRole("textbox", { name: "username" }), username);
  await user.click(
    screen.getByRole("button", {
      name: "submit",
    }),
  );
};

const expandRepository = async (user: UserEvent) => {
  await user.click(
    screen.getAllByRole("button", {
      name: "expandRepository",
    })[0]!,
  );
};

describe("Search", () => {
  it("should render users with matching username", async () => {
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");

    expect(screen.getByRole("list", { name: "userList" })).toHaveTextContent(
      "msz",
    );
  });

  it("should render users when username input was submitted by pressing enter", async () => {
    const { user } = setup(<Search />);

    await user.type(
      screen.getByRole("textbox", { name: "username" }),
      "msz[Enter]",
    );

    expect(screen.getByRole("list", { name: "userList" })).toHaveTextContent(
      "msz",
    );
  });

  it("should not render users if empty value is returned", async () => {
    server.use(
      http.get(`/api/search/users`, () => {
        return HttpResponse.json(emptyUsersResponse);
      }),
    );
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");

    expect(screen.queryByRole("listitem", { name: "userListItem" })).toBeNull();
    expect(
      screen.getByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("No matching users for msz");
  });

  it("should not render users if error is returned", async () => {
    server.use(
      http.get(`/api/search/users`, () => {
        return HttpResponse.json({}, { status: 404 });
      }),
    );
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");

    expect(screen.queryByRole("list", { name: "userList" })).toBeNull();
    expect(
      screen.getByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("Something went wrong");
  });

  it("should inform the user the resources are loading when fetching users", async () => {
    server.use(
      http.get(`/api/search/users`, async () => {
        await delay("infinite");
        return HttpResponse.json({}, { status: 404 });
      }),
    );
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");

    expect(screen.queryByRole("list", { name: "userList" })).toBeNull();
    expect(
      screen.queryByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("Loading");
  });

  it("should render repositories for expanded user", async () => {
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");
    await expandRepository(user);

    expect(
      screen.getByRole("list", { name: "repositoriesList" }),
    ).not.toBeNull();
    expect(
      screen.getByRole("listitem", { name: "repositoriesListItem" }),
    ).toHaveTextContent("gh-repo-explorer");
  });

  it("should inform the user the resources are loading when fetching repositories", async () => {
    server.use(
      http.get(`/api/users/:login/repos`, async () => {
        await delay("infinite");
        return HttpResponse.json(emptyRepositoryResponse);
      }),
    );
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");
    await expandRepository(user);

    expect(
      screen.getByRole("listitem", { name: "emptyRepositoriesListItem" })
        .children[0],
    ).toHaveTextContent("Loading...");
    expect(
      screen.queryByRole("listitem", { name: "repositoriesListItem" }),
    ).toBeNull();
  });

  it("should inform the user the resources are loading when fetching repositories", async () => {
    server.use(
      http.get(`/api/users/:login/repos`, async () => {
        return HttpResponse.json(emptyRepositoryResponse);
      }),
    );
    const { user } = setup(<Search />);

    await inputUsernameAndSubmit(user, "msz");
    await expandRepository(user);

    expect(
      screen.getByRole("listitem", { name: "emptyRepositoriesListItem" })
        .children[0],
    ).toHaveTextContent("No public repositories available");
    expect(
      screen.queryByRole("listitem", { name: "repositoriesListItem" }),
    ).toBeNull();
  });
});
