
import React from 'react';
import { RepoFile, Repository, Issue, StagedFile } from './types';

export const MOCK_REPO: Repository = {
  owner: 'google-gemini',
  name: 'git-gemini-pro',
  description: 'An intelligent Git platform clone built with React, Tailwind, and Gemini AI. Includes repo summaries, code insights, and more.',
  stars: 12400,
  forks: 892,
  watching: 450,
  isPrivate: false,
  branches: ['main', 'dev', 'feat/gemini-integration'],
  currentBranch: 'main',
  topics: ['react', 'gemini-api', 'tailwind-css', 'github-clone', 'ai'],
  files: [
    { name: 'src', type: 'directory', path: 'src', lastCommit: '2 days ago', lastMessage: 'Refactor gemini service' },
    { name: 'public', type: 'directory', path: 'public', lastCommit: '1 month ago', lastMessage: 'Initial assets' },
    { name: 'components', type: 'directory', path: 'components', lastCommit: '3 hours ago', lastMessage: 'Add sidebar AI widget' },
    { name: 'App.tsx', type: 'file', path: 'App.tsx', lastCommit: '1 hour ago', lastMessage: 'Update main layout', content: 'import React from "react";\n\nconst App = () => {\n  return <div>Hello Gemini!</div>;\n};' },
    { name: 'package.json', type: 'file', path: 'package.json', lastCommit: '5 days ago', lastMessage: 'Add genai sdk', content: '{\n  "name": "git-gemini",\n  "version": "1.0.0",\n  "dependencies": {\n    "@google/genai": "latest"\n  }\n}' },
    { name: 'README.md', type: 'file', path: 'README.md', lastCommit: '1 hour ago', lastMessage: 'Update README with AI features', content: '# GitGemini\n\nThis is a GitHub clone powered by Gemini.\n\n## Features\n- AI File Summarization\n- Intelligent Code Search\n- Repo Insights' },
  ]
};

export const MOCK_ISSUES: Issue[] = [
  { id: 1, title: 'Implement real-time collaboration', author: 'jeffdean', status: 'open', labels: ['enhancement', 'p1'], comments: 12, createdAt: '2 days ago' },
  { id: 2, title: 'Bug: File explorer not scrolling on mobile', author: 'coder123', status: 'open', labels: ['bug'], comments: 3, createdAt: '5 hours ago' },
  { id: 3, title: 'Update dependencies to React 19', author: 'ai-bot', status: 'closed', labels: ['maintenance'], comments: 1, createdAt: '1 week ago' },
];

export const MOCK_STAGED_CHANGES: StagedFile[] = [
  {
    path: 'services/authService.ts',
    status: 'modified',
    diff: `@@ -15,7 +15,7 @@\n- const MAX_RETRIES = 3;\n+ const MAX_RETRIES = 5;\n \n export const login = async (credentials: Credentials) => {\n-  return api.post('/login', credentials);\n+  const response = await api.post('/auth/login', credentials);\n+  return response.data;\n };`
  },
  {
    path: 'components/LoginForm.tsx',
    status: 'modified',
    diff: `@@ -45,6 +45,8 @@\n     try {\n       await login(values);\n+      toast.success('Welcome back!');\n       navigate('/dashboard');\n     } catch (err) {\n-      setError('Invalid credentials');\n+      setError(err.message || 'Login failed');\n     }`
  },
  {
    path: 'types/auth.ts',
    status: 'added',
    diff: `+ export interface Credentials {\n+   email: string;\n+   token: string;\n+ }`
  }
];

export const Icons = {
  Repo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-11h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8a.75.75 0 0 1 0 1.5h-8a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h8a.75.75 0 0 1 0 1.5h-8A2.5 2.5 0 0 1 2 13.5V2.5Z"></path></svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
  ),
  Fork: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path></svg>
  ),
  Issue: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
  ),
  PullRequest: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677 2.152a.75.75 0 0 1 .75-.75h2.823c.414 0 .75.336.75.75v5.122a2.25 2.25 0 1 1-1.5 0V5.902h-2.073v2.348a2.251 2.251 0 1 1-1.5 0V5.402ZM3.25 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.25 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path></svg>
  ),
  Folder: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props} fill="#7d8590"><path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.784.784 1 1.75 1ZM1.5 2.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.5h-8a.75.75 0 0 1-.75-.75v-2h-4a.25.25 0 0 0-.25.25Z"></path></svg>
  ),
  File: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props} fill="#7d8590"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16H3.75A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-2.938-2.938Z"></path></svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
  ),
  ChevronDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.94l3.72-3.72a.749.749 0 0 1 1.06 0Z"></path></svg>
  ),
  Commit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" {...props}><path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5h-3.32Z"></path></svg>
  )
};
