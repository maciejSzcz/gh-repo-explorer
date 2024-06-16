import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { http, HttpResponse, delay } from "msw";

import { render, screen } from "tests";
import { server } from "tests/msw/server";

import { Search } from "./Search";
import { emptyUsersResponse } from "tests/fixtures/usersResponse";
import { emptyRepositoryResponse } from "tests/fixtures/repositoriesResponse";

describe("Search", () => {
  it("should render users with matching username", async () => {
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
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
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );

    expect(screen.queryByRole("listitem", { name: "userListItem" })).toBeNull();
    expect(
      screen.queryByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("No matching users for msz");
  });

  it("should not render users if error is returned", async () => {
    server.use(
      http.get(`/api/search/users`, () => {
        return HttpResponse.json({}, { status: 404 });
      }),
    );
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );

    expect(screen.queryByRole("list", { name: "userList" })).toBeNull();
    expect(
      screen.queryByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("Something went wrong");
  });

  it("should inform the user the resources are loading when fetching users", async () => {
    server.use(
      http.get(`/api/search/users`, async () => {
        await delay("infinite");
        return HttpResponse.json({}, { status: 404 });
      }),
    );
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );

    expect(screen.queryByRole("list", { name: "userList" })).toBeNull();
    expect(
      screen.queryByRole("paragraph", { name: "resultSummary" }),
    ).toHaveTextContent("Loading");
  });

  it("should render repositories for expanded user", async () => {
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );
    await user.click(
      screen.getAllByRole("button", {
        name: "expandRepository",
      })[0]!,
    );
    expect(
      screen.queryByRole("list", { name: "repositoriesList" }),
    ).not.toBeNull();
    expect(
      screen.queryByRole("listitem", { name: "repositoriesListItem" }),
    ).not.toBeNull();
  });

  it("should inform the user the resources are loading when fetching repositories", async () => {
    server.use(
      http.get(`/api/users/:login/repos`, async () => {
        await delay("infinite");
        return HttpResponse.json(emptyRepositoryResponse);
      }),
    );
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );
    await user.click(
      screen.getAllByRole("button", {
        name: "expandRepository",
      })[0]!,
    );
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
    const user = userEvent.setup();
    render(<Search />);

    await user.type(screen.getByRole("textbox", { name: "username" }), "msz");
    await user.click(
      screen.getByRole("button", {
        name: "submit",
      }),
    );
    await user.click(
      screen.getAllByRole("button", {
        name: "expandRepository",
      })[0]!,
    );
    expect(
      screen.getByRole("listitem", { name: "emptyRepositoriesListItem" })
        .children[0],
    ).toHaveTextContent("No public repositories available");
    expect(
      screen.queryByRole("listitem", { name: "repositoriesListItem" }),
    ).toBeNull();
  });
});
