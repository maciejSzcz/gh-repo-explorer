import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { queryClient } from "requests/queryClient";

const theme = {
  colors: { blue: "#2d9cdb" },
  appWidth: "340px",
} as const;

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
