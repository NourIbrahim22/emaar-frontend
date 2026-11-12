import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Map, ScanSearch, Calculator, ListOrdered, 
  FolderKanban, FileText, Eye, Settings, LogOut, Users 
} from 'lucide-react';
import type { UserRole } from '../../types/user.types';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { path: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard, roles: ['admin', 'gov_employee', 'engineer', 'field_team', 'donor'] },
  { path: '/map', label: 'الخريطة التفاعلية', icon: Map, roles: ['admin', 'gov_employee', 'engineer', 'field_team', 'donor'] },
  { path: '/damage-analysis', label: 'تحليل الأضرار', icon: ScanSearch, roles: ['engineer'] },
  { path: '/costs', label: 'تقدير التكاليف', icon: Calculator, roles: ['gov_employee'] },
  { path: '/priorities', label: 'ترتيب الأولويات', icon: ListOrdered, roles: ['gov_employee'] },
  { path: '/projects', label: 'المشاريع', icon: FolderKanban, roles: ['gov_employee', 'field_team'] }, 
  { path: '/reports', label: 'التقارير', icon: FileText, roles: ['gov_employee', 'donor'] },
  { path: '/transparency', label: 'الشفافية المفتوحة', icon: Eye, roles: ['donor'] },
  { path: '/audit-log', label: 'سجل التدقيق', icon: Users, roles: ['admin', 'gov_employee'] },
  { path: '/settings', label: 'الإعدادات', icon: Settings, roles: ['admin', 'gov_employee'] },
];

interface SidebarProps {
  userRole: UserRole;
}

export default function Sidebar({ userRole }: SidebarProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

  const getRoleLabel = (role: UserRole) => {
    switch(role) {
      case 'admin': return 'مدير النظام (مراقب)';
      case 'gov_employee': return 'موظف حكومي';
      case 'engineer': return 'مهندس مدني';
      case 'field_team': return 'فريق ميداني';
      case 'donor': return 'جهة مانحة';
      default: return '';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-[#1B2A4A] min-h-screen flex flex-col text-white">
      <div className="h-16 flex items-center justify-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#F59E0B]">إعمار</h1>
      </div>

      <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
        {filteredItems.map((item) => (
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
            أ
          </div>
          <div>
            <p className="text-sm font-bold">أحمد الخطيب</p>
            <p className="text-xs text-slate-400">{getRoleLabel(userRole)}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm w-full"
        >
          <LogOut className="h-4 w-4" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}