
import React, { useState } from 'react';
import Header from './components/Header';
import RepoHeader from './components/RepoHeader';
import FileBrowser from './components/FileBrowser';
import CodeView from './components/CodeView';
import Sidebar from './components/Sidebar';
import CommitView from './components/CommitView';
import { MOCK_REPO, MOCK_STAGED_CHANGES, Icons } from './constants';
import { RepoFile } from './types';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<RepoFile | null>(null);
  const [showCommitView, setShowCommitView] = useState(false);

  const handleFileClick = (file: RepoFile) => {
    if (file.type === 'file') {
      setSelectedFile(file);
      setShowCommitView(false);
    }
  };

  const handleCommitClick = () => {
    setShowCommitView(true);
    setSelectedFile(null);
  };

  const handleBackToFiles = () => {
    setSelectedFile(null);
    setShowCommitView(false);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col pb-12">
      <Header />
      <RepoHeader repo={MOCK_REPO} />
      
      <main className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-6 w-full flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          {showCommitView ? (
             <CommitView 
                stagedFiles={MOCK_STAGED_CHANGES} 
                onCancel={handleBackToFiles} 
             />
          ) : !selectedFile ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-sm font-semibold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-md hover:bg-[#30363d]">
                    <Icons.Repo className="w-4 h-4 mr-2 text-[#8b949e]" />
                    {MOCK_REPO.currentBranch}
                    <Icons.ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                  <div className="hidden sm:flex items-center text-sm text-[#8b949e] px-2">
                    <span className="font-semibold text-[#c9d1d9] mr-1">3</span> branches
                  </div>
                </div>
                <div className="flex space-x-2">
                   <button className="hidden sm:block px-3 py-1.5 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] text-sm font-semibold rounded-md hover:bg-[#30363d]">Go to file</button>
                   <button 
                     className="px-3 py-1.5 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] text-sm font-semibold rounded-md hover:bg-[#30363d] flex items-center"
                     onClick={handleCommitClick}
                   >
                      <Icons.Commit className="w-4 h-4 mr-2" />
                      Commit Changes
                   </button>
                   <button className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-semibold rounded-md flex items-center">
                     <Icons.Folder className="w-4 h-4 mr-2 fill-white" />
                     Code
                     <Icons.ChevronDown className="w-4 h-4 ml-1" />
                   </button>
                </div>
              </div>

              <FileBrowser 
                files={MOCK_REPO.files} 
                onFileClick={handleFileClick} 
              />

              {/* README Preview Mock */}
              <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117] mt-8">
                <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2 flex items-center text-xs font-semibold text-[#c9d1d9]">
                  <Icons.Repo className="w-3.5 h-3.5 mr-2" />
                  README.md
                </div>
                <div className="p-8 prose prose-invert max-w-none">
                  <h1 className="text-3xl font-bold border-b border-[#30363d] pb-2 mb-4">{MOCK_REPO.name}</h1>
                  <p className="text-lg text-[#8b949e] mb-6">
                    Welcome to the GitGemini repository! This project demonstrates how to integrate modern AI capabilities directly into the software development workflow.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 border border-[#30363d] rounded-lg bg-[#161b22]">
                      <h3 className="font-bold text-[#c9d1d9] mb-2 flex items-center">
                        <Icons.Check className="w-4 h-4 mr-2 text-green-500" /> AI Insights
                      </h3>
                      <p className="text-sm text-[#8b949e]">Instantly summarize repositories and explain complex code blocks using Gemini 3.</p>
                    </div>
                    <div className="p-4 border border-[#30363d] rounded-lg bg-[#161b22]">
                      <h3 className="font-bold text-[#c9d1d9] mb-2 flex items-center">
                        <Icons.Star className="w-4 h-4 mr-2 text-yellow-500" /> High Fidelity UI
                      </h3>
                      <p className="text-sm text-[#8b949e]">A pixel-perfect recreation of the GitHub experience built with Tailwind CSS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CodeView 
              file={selectedFile} 
              onBack={handleBackToFiles} 
            />
          )}
        </div>

        <Sidebar repo={MOCK_REPO} />
      </main>

      <footer className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-12 border-t border-[#30363d] pt-10 text-xs text-[#8b949e] flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="flex items-center space-x-4">
           <svg height="24" viewBox="0 0 16 16" width="24" fill="#30363d">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <span>© 2024 GitGemini, Inc.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <span className="hover:text-[#58a6ff] cursor-pointer">Terms</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Privacy</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Security</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Status</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Docs</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Contact</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Manage cookies</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Do not share my personal information</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
