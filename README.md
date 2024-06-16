[![Test](https://github.com/maciejSzcz/gh-repo-explorer/actions/workflows/test.yml/badge.svg)](https://github.com/maciejSzcz/gh-repo-explorer/actions/workflows/test.yml)

# Github repo explorer

GitHub repository explorer is a web application written in React to search and display public GitHub repositories.

It uses the [GitHub rest api](https://docs.github.com/en/rest) without a token, so extensive usage might be rate limited.

## Public deployment

The app is hosted on fly.io [here](https://gh-repo-explorer.fly.dev)

## Running project locally

This project uses pnpm to manage dependencies, if you don't have it installed refer to [this page](https://pnpm.io/installation).

Run `pnpm install` to install dependencies and then you can run `pnpm run dev` to start the project locally.

## Tests

Start the test suite by running `pnpm run test`.
The tests are written in vitest and uses React Testing Library and MSW.
