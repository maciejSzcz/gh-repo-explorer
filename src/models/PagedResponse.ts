// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PagedResponse<T extends Record<string, any>> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}
