
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { RepoFile } from '../types';
import { explainCode } from '../services/geminiService';

interface CodeViewProps {
  file: RepoFile;
  onBack: () => void;
}

const CodeView: React.FC<CodeViewProps> = ({ file, onBack }) => {
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!file.content) return;
    setLoading(true);
    const result = await explainCode(file.name, file.content);
    setExplanation(result);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="text-sm text-[#58a6ff] hover:underline flex items-center"
        >
          <Icons.ChevronDown className="rotate-90 mr-1 w-4 h-4" />
          Back to repository
        </button>
        <button 
          onClick={handleExplain}
          disabled={loading}
          className="bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 text-white px-3 py-1 rounded-md text-sm font-semibold flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
          {loading ? 'Thinking...' : 'Gemini Explain'}
        </button>
      </div>

      {explanation && (
        <div className="bg-[#1c2128] border border-[#1f6feb] border-l-4 rounded-md p-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center mb-2 text-[#58a6ff]">
            <span className="text-xs font-bold uppercase tracking-wider">AI Insight</span>
          </div>
          <p className="text-sm text-[#c9d1d9] italic leading-relaxed">"{explanation}"</p>
        </div>
      )}

      <div className="border border-[#30363d] rounded-md overflow-hidden">
        <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2 flex items-center justify-between">
          <div className="text-xs font-semibold text-[#c9d1d9] flex items-center">
             {file.name}
             <span className="ml-4 font-normal text-[#8b949e]">32 lines (24 loc) · 1.45 KB</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-[#30363d] rounded transition-colors text-[#8b949e]"><Icons.Star className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="bg-[#0d1117] p-4 overflow-x-auto">
          <pre className="code-font text-sm leading-6 text-[#c9d1d9]">
            <code>
              {file.content || '// No preview available for this file type.'}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeView;
