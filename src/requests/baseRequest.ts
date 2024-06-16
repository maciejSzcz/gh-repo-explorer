export const request = async <T>(
  path: string,
  method?: string | null,
  body?: Record<string, unknown> | null,
  options?: Omit<RequestInit, "body" | "method">,
): Promise<T> => {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/vnd.github+json",
    },
    method: method ?? "GET",
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!response.ok) {
    throw new Error("Something went wrong while fetching resource");
  }

  return response.json();
};
