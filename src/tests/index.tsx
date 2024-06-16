import type { RenderHookOptions, RenderOptions } from "@testing-library/react";
import { render, renderHook } from "@testing-library/react";
import type { ReactElement } from "react";
import { QueryClient } from "@tanstack/react-query";

import Providers from "providers";

import type { WrapperProps } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Wrapper = ({ children }: WrapperProps) => {
  return <Providers>{children}</Providers>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  render(ui, { wrapper: Wrapper, ...options });
};

const customRenderHook = <Result, Props>(
  hook: (initialProps: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, "wrapper">,
) => {
  return renderHook(hook, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render, customRenderHook as renderHook };
