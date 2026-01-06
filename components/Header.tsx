
import React from 'react';
import { Icons } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-[#010409] border-b border-[#30363d] px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="hover:opacity-70 cursor-pointer">
          <svg height="32" viewBox="0 0 16 16" width="32" fill="white">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </div>
        <div className="hidden md:flex items-center space-x-3 text-sm font-semibold text-[#c9d1d9]">
          <span className="cursor-pointer hover:bg-[#21262d] px-2 py-1 rounded">Product</span>
          <span className="cursor-pointer hover:bg-[#21262d] px-2 py-1 rounded">Solutions</span>
          <span className="cursor-pointer hover:bg-[#21262d] px-2 py-1 rounded">Open Source</span>
          <span className="cursor-pointer hover:bg-[#21262d] px-2 py-1 rounded">Pricing</span>
        </div>
      </div>

      <div className="flex items-center space-x-3 flex-1 max-w-sm ml-4">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Type / to search" 
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md py-1.5 pl-3 pr-10 text-xs text-[#c9d1d9] focus:outline-none focus:border-[#1f6feb] transition-all"
          />
          <span className="absolute right-2 top-1.5 text-[10px] bg-[#21262d] px-1 border border-[#30363d] rounded text-[#8b949e]">/</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <div className="hidden md:flex space-x-2">
          <button className="text-[#c9d1d9] hover:text-white"><Icons.Star className="w-5 h-5"/></button>
          <button className="text-[#c9d1d9] hover:text-white"><Icons.Fork className="w-5 h-5"/></button>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 cursor-pointer ring-1 ring-[#30363d]"></div>
      </div>
    </header>
  );
};

export default Header;
