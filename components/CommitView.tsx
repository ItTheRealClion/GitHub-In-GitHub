
import React, { useState } from 'react';
import { Icons } from '../constants';
import { StagedFile } from '../types';
import { generateCommitMessage } from '../services/geminiService';

interface CommitViewProps {
  stagedFiles: StagedFile[];
  onCancel: () => void;
}

const CommitView: React.FC<CommitViewProps> = ({ stagedFiles, onCancel }) => {
  const [message, setMessage] = useState('');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    const msg = await generateCommitMessage(stagedFiles);
    setMessage(msg);
    setGenerating(false);
  };

  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden">
        {/* Header */}
        <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#c9d1d9] flex items-center">
                <Icons.Commit className="w-4 h-4 mr-2" />
                Commit Changes
            </h2>
            <button onClick={onCancel} className="text-[#8b949e] hover:text-[#58a6ff]">
                <Icons.ChevronDown className="w-4 h-4 rotate-90" />
            </button>
        </div>

        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Staged Files List */}
            <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                     <span className="text-xs font-semibold text-[#8b949e] uppercase">Staged Changes ({stagedFiles.length})</span>
                </div>
                <div className="space-y-2">
                    {stagedFiles.map((file) => (
                        <div key={file.path} className="border border-[#30363d] rounded-md overflow-hidden">
                            <div className="bg-[#161b22] px-3 py-2 text-xs font-mono text-[#c9d1d9] flex justify-between items-center border-b border-[#30363d]">
                                <span>{file.path}</span>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold 
                                    ${file.status === 'modified' ? 'bg-yellow-900/30 text-yellow-500' : 
                                      file.status === 'added' ? 'bg-green-900/30 text-green-500' : 'bg-red-900/30 text-red-500'}`}>
                                    {file.status}
                                </span>
                            </div>
                            <pre className="p-3 text-xs bg-[#0d1117] text-[#8b949e] overflow-x-auto whitespace-pre-wrap code-font">
                                {file.diff}
                            </pre>
                        </div>
                    ))}
                </div>
            </div>

            {/* Commit Message Form */}
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 sticky top-4">
                    <div className="flex items-center justify-between mb-3">
                         <h3 className="text-sm font-bold text-[#c9d1d9]">Commit Message</h3>
                         <button 
                            onClick={handleGenerate}
                            disabled={generating}
                            className="text-xs flex items-center text-[#58a6ff] hover:text-white disabled:opacity-50 transition-colors"
                         >
                            {generating ? (
                                <>Thinking...</>
                            ) : (
                                <>
                                    <span className="mr-1">✨</span> Generate
                                </>
                            )}
                         </button>
                    </div>
                    <textarea 
                        className="w-full h-40 bg-[#0d1117] border border-[#30363d] rounded-md p-3 text-sm text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff] placeholder-[#484f58] resize-none code-font"
                        placeholder="Enter commit message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="mt-4 flex justify-end space-x-2">
                         <button 
                            onClick={onCancel}
                            className="px-4 py-2 text-xs font-bold text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors"
                        >
                            Cancel
                         </button>
                         <button 
                            className="px-4 py-2 text-xs font-bold text-white bg-[#238636] rounded-md hover:bg-[#2ea043] border border-[rgba(240,246,252,0.1)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!message}
                        >
                            Commit to main
                         </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CommitView;
