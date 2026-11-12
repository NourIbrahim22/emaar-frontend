import { Building2, MapPin, HardHat, Wallet } from 'lucide-react';
import Card from '../../components/ui/Card';
import StaticMap from '../../components/map/StaticMap';
import MainLayout from '../../components/layout/MainLayout';
import type { UserRole } from '../../types/user.types';

const kpis = [
  { label: 'إجمالي الأضرار المقيّمة', value: '108 مليار $', icon: Building2, color: 'text-red-500' },
  { label: 'المناطق المتضررة', value: '1,247', icon: MapPin, color: 'text-orange-500' },
  { label: 'المشاريع النشطة', value: '86', icon: HardHat, color: 'text-green-500' },
  { label: 'الميزانية المقدّرة', value: '216 مليار $', icon: Wallet, color: 'text-blue-500' },
];

interface DashboardPageProps {
  userRole: UserRole;
}

export default function DashboardPage({ userRole }: DashboardPageProps) {
  return (
    <MainLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">لوحة التحكم</h1>
          <p className="text-slate-500 mt-1">نظرة عامة على حالة إعادة الإعمار — آخر تحديث: 2026-01-15</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{kpi.label}</p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">{kpi.value}</p>
                </div>
                <kpi.icon className={`h-10 w-10 ${kpi.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">خريطة الأضرار</h3>
              <span className="text-xs text-slate-400">آخر تحديث: 2026-01-15</span>
            </div>
            <StaticMap />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">الأضرار حسب القطاع</h3>
            <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
              [ الرسم البياني - قيد التنفيذ ]
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}