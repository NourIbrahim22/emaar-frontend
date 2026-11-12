import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Map, ScanSearch, Calculator, ListOrdered, 
  FolderKanban, FileText, Eye, Settings, LogOut 
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
  { path: '/map', label: 'الخريطة التفاعلية', icon: Map },
  { path: '/damage-analysis', label: 'تحليل الأضرار', icon: ScanSearch },
  { path: '/costs', label: 'تقدير التكاليف', icon: Calculator },
  { path: '/priorities', label: 'ترتيب الأولويات', icon: ListOrdered },
  { path: '/projects', label: 'المشاريع', icon: FolderKanban },
  { path: '/reports', label: 'التقارير', icon: FileText },
  { path: '/transparency', label: 'الشفافية المفتوحة', icon: Eye },
  { path: '/settings', label: 'الإعدادات', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1B2A4A] min-h-screen flex flex-col text-white">
      <div className="h-16 flex items-center justify-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#F59E0B]">إعمار</h1>
      </div>

      <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm font-medium transition border-r-4 ${
                isActive
                  ? 'bg-white/10 text-[#F59E0B] border-[#F59E0B]'
                  : 'text-slate-300 border-transparent hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold">
            ن
          </div>
          <div>
            <p className="text-sm font-bold">نور الهدى</p>
            <p className="text-xs text-slate-400">موظف إدارة النظام</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm w-full">
          <LogOut className="h-4 w-4" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}