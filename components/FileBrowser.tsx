
import React from 'react';
import { Icons } from '../constants';
import { RepoFile } from '../types';

interface FileBrowserProps {
  files: RepoFile[];
  onFileClick: (file: RepoFile) => void;
}

const FileBrowser: React.FC<FileBrowserProps> = ({ files, onFileClick }) => {
  return (
    <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
      <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-gray-500"></div>
          <span className="text-sm font-semibold text-[#c9d1d9]">google-gemini</span>
          <span className="text-sm text-[#8b949e]">Update project structure</span>
        </div>
        <div className="text-sm text-[#8b949e] flex items-center space-x-4">
          <span className="hover:text-[#58a6ff] cursor-pointer">8234ea7</span>
          <span>1 hour ago</span>
          <span className="font-semibold text-[#c9d1d9]">142 commits</span>
        </div>
      </div>

      <div className="divide-y divide-[#30363d]">
        {files.map((file) => (
          <div 
            key={file.path} 
            onClick={() => onFileClick(file)}
            className="flex items-center px-4 py-2 hover:bg-[#161b22] cursor-pointer group transition-colors"
          >
            <div className="w-1/3 flex items-center">
              {file.type === 'directory' ? <Icons.Folder className="mr-3" /> : <Icons.File className="mr-3" />}
              <span className="text-sm text-[#c9d1d9] group-hover:text-[#58a6ff] group-hover:underline">{file.name}</span>
            </div>
            <div className="w-1/2 text-sm text-[#8b949e] truncate px-2">{file.lastMessage}</div>
            <div className="w-[100px] text-sm text-[#8b949e] text-right whitespace-nowrap">{file.lastCommit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileBrowser;
