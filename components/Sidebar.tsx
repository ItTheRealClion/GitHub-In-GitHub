
import React, { useState, useEffect } from 'react';
import { Repository } from '../types';
import { summarizeRepo } from '../services/geminiService';

interface SidebarProps {
  repo: Repository;
}

const Sidebar: React.FC<SidebarProps> = ({ repo }) => {
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      const res = await summarizeRepo(repo.name, repo.description);
      setSummary(res);
      setLoading(false);
    };
    fetchSummary();
  }, [repo.name, repo.description]);

  return (
    <div className="w-full lg:w-[300px] space-y-6 pt-2">
      <section>
        <h2 className="text-sm font-bold text-[#c9d1d9] mb-3">About</h2>
        <p className="text-sm text-[#c9d1d9] mb-4 leading-relaxed">{repo.description}</p>
        
        <div className="space-y-3">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
            <h3 className="text-xs font-bold text-[#8b949e] uppercase mb-2 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Gemini Repo Insight
            </h3>
            {loading ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-2 bg-[#30363d] rounded w-full"></div>
                <div className="h-2 bg-[#30363d] rounded w-5/6"></div>
              </div>
            ) : (
              <p className="text-xs text-[#c9d1d9] leading-relaxed whitespace-pre-wrap">{summary}</p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.map(topic => (
              <span key={topic} className="px-2 py-0.5 bg-[#121d2f] text-[#58a6ff] hover:bg-[#1f6feb] hover:text-white cursor-pointer rounded-full text-xs font-medium border border-transparent transition-colors">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-4 border-t border-[#30363d]">
        <h2 className="text-sm font-bold text-[#c9d1d9] mb-3">Releases</h2>
        <p className="text-xs text-[#8b949e]">No releases published</p>
      </section>

      <section className="pt-4 border-t border-[#30363d]">
        <h2 className="text-sm font-bold text-[#c9d1d9] mb-3">Languages</h2>
        <div className="h-2 w-full flex rounded-full overflow-hidden mb-3">
          <div className="h-full bg-[#f1e05a]" style={{ width: '60%' }}></div>
          <div className="h-full bg-[#3178c6]" style={{ width: '30%' }}></div>
          <div className="h-full bg-[#e34c26]" style={{ width: '10%' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-y-1.5">
          <div className="flex items-center text-xs">
            <span className="w-2 h-2 bg-[#f1e05a] rounded-full mr-2"></span>
            <span className="text-[#c9d1d9] font-medium mr-1">JavaScript</span>
            <span className="text-[#8b949e]">60.2%</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="w-2 h-2 bg-[#3178c6] rounded-full mr-2"></span>
            <span className="text-[#c9d1d9] font-medium mr-1">TypeScript</span>
            <span className="text-[#8b949e]">29.8%</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
