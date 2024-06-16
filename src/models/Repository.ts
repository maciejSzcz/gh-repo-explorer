import type { User } from "./User";

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: User;
  private: boolean;
  description: string | null;
  fork: boolean;
  url: string;
  homepage: string | null;
  language: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions?: {
    admin: boolean;
    push: boolean;
    pull: boolean;
  };
}
