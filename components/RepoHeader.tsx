
import React from 'react';
import { Icons } from '../constants';
import { Repository } from '../types';

interface RepoHeaderProps {
  repo: Repository;
}

const RepoHeader: React.FC<RepoHeaderProps> = ({ repo }) => {
  return (
    <div className="bg-[#0d1117] pt-4 border-b border-[#30363d]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <Icons.Repo className="w-4 h-4 text-[#8b949e]" />
            <h1 className="text-xl font-semibold flex items-center">
              <span className="text-[#58a6ff] hover:underline cursor-pointer">{repo.owner}</span>
              <span className="mx-1 text-[#8b949e]">/</span>
              <span className="text-[#58a6ff] hover:underline cursor-pointer font-bold">{repo.name}</span>
              <span className="ml-2 px-2 py-0.5 border border-[#30363d] text-xs text-[#8b949e] rounded-full font-medium">Public</span>
            </h1>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden bg-[#21262d]">
              <button className="flex items-center px-3 py-1.5 hover:bg-[#30363d] transition-colors border-r border-[#30363d]">
                <Icons.Star className="w-4 h-4 mr-1.5 text-[#8b949e]" /> Star
              </button>
              <span className="px-3 py-1.5 bg-[#0d1117] font-semibold">{repo.stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden bg-[#21262d]">
              <button className="flex items-center px-3 py-1.5 hover:bg-[#30363d] transition-colors border-r border-[#30363d]">
                <Icons.Fork className="w-4 h-4 mr-1.5 text-[#8b949e]" /> Fork
              </button>
              <span className="px-3 py-1.5 bg-[#0d1117] font-semibold">{repo.forks.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <nav className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {[
            { name: 'Code', icon: Icons.Repo, active: true },
            { name: 'Issues', icon: Icons.Issue, count: 12 },
            { name: 'Pull requests', icon: Icons.PullRequest, count: 3 },
            { name: 'Actions', icon: Icons.Check },
            { name: 'Projects', icon: Icons.Repo },
            { name: 'Wiki', icon: Icons.Repo },
            { name: 'Security', icon: Icons.Repo },
            { name: 'Insights', icon: Icons.Repo },
          ].map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center px-4 py-2 text-sm border-b-2 transition-colors whitespace-nowrap ${
                tab.active ? 'border-[#f78166] text-[#c9d1d9]' : 'border-transparent text-[#8b949e] hover:bg-[#21262d]'
              }`}
            >
              <tab.icon className={`w-4 h-4 mr-2 ${tab.active ? 'text-[#c9d1d9]' : ''}`} />
              {tab.name}
              {tab.count !== undefined && (
                <span className="ml-2 bg-[#30363d] text-[#c9d1d9] px-1.5 py-0.5 rounded-full text-xs">{tab.count}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RepoHeader;
