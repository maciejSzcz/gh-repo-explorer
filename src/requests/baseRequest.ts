export const request = async <T>(
  path: string,
  method?: string | null,
  body?: Record<string, unknown> | null,
  options?: Omit<RequestInit, "body" | "method">,
): Promise<T> => {
  return fetch(path, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/vnd.github+json",
    },
    method: method ?? "GET",
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  }).then((res) => res.json());
};
