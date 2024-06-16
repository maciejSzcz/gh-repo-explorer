import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { server } from "tests/msw/server";
import "@testing-library/jest-dom/vitest";
import { queryClient } from "requests/queryClient";

expect.extend(matchers);

beforeAll(() => {
  return server.listen();
});

afterEach(() => {
  cleanup();
  queryClient.clear();
  return server.resetHandlers();
});

afterAll(() => {
  return server.close();
});
