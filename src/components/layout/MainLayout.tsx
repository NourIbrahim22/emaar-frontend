import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import type { UserRole } from '../../types/user.types';

interface MainLayoutProps {
  children: ReactNode;
  userRole: UserRole;
}

export default function MainLayout({ children, userRole }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50" dir="rtl">
      <Sidebar userRole={userRole} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}