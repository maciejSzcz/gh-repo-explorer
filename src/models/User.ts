export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  type: string;
  score?: number;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
  name?: string | null;
  bio?: string | null;
  email?: string | null;
  location?: string | null;
  site_admin: boolean;
  hireable?: boolean | null;
  blog?: string | null;
  company?: string | null;
  suspended_at?: string | null;
}
