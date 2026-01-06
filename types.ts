
export type FileType = 'file' | 'directory';

export interface RepoFile {
  name: string;
  type: FileType;
  path: string;
  content?: string;
  size?: string;
  lastCommit?: string;
  lastMessage?: string;
}

export interface Repository {
  owner: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  watching: number;
  isPrivate: boolean;
  branches: string[];
  currentBranch: string;
  topics: string[];
  files: RepoFile[];
}

export interface Issue {
  id: number;
  title: string;
  author: string;
  status: 'open' | 'closed';
  labels: string[];
  comments: number;
  createdAt: string;
}

export interface StagedFile {
  path: string;
  status: 'modified' | 'added' | 'deleted';
  diff: string;
}
