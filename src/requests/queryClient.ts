import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV === "test" ? false : true,
    },
  },
});
