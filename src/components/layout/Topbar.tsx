import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="ابحث عن منطقة، مشروع، أو تقرير..."
            className="w-full pr-10 pl-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-slate-100 rounded-lg transition">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-1 left-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-slate-200"></div>
        <button className="flex items-center gap-2 hover:bg-slate-100 rounded-lg p-2 transition">
          <div className="h-8 w-8 rounded-full bg-[#1B2A4A] flex items-center justify-center text-white text-sm font-bold">
            ن
          </div>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>
    </header>
  );
}