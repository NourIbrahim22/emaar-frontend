import { useState } from 'react';
import StaticMap from '../../components/map/StaticMap';
import MainLayout from '../../components/layout/MainLayout';

const governorates = [
  { id: 'aleppo', name: 'حلب' },
  { id: 'damascus', name: 'دمشق' },
  { id: 'homs', name: 'حمص' },
  { id: 'rif_dimashq', name: 'ريف دمشق' },
  { id: 'idlib', name: 'إدلب' },
];

export default function MapPage() {
  const [selectedGovernorate, setSelectedGovernorate] = useState('');

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">الخريطة التفاعلية</h1>
          <p className="text-slate-500 mt-1">استعرض الأضرار حسب المنطقة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4">الفلاتر</h3>


              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  المحافظة
                </label>
                <select
                  value={selectedGovernorate}
                  onChange={(e) => setSelectedGovernorate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent bg-white"
                >
                  <option value="">الكل</option>
                  {governorates.map((gov) => (
                    <option key={gov.id} value={gov.id}>
                      {gov.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  المنطقة
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent bg-white">
                  <option value="">الكل</option>
                  <option value="jalloum">الجلوم</option>
                  <option value="qadam">القدم</option>
                  <option value="waer">الوعر</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  الناحية
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent bg-white">
                  <option value="">الكل</option>
                  <option value="nahia1">الناحية الأولى</option>
                  <option value="nahia2">الناحية الثانية</option>
                </select>
              </div>

              <button className="w-full bg-[#F59E0B] text-white py-2 rounded-lg font-bold hover:bg-[#D97706] transition">
                تطبيق الفلاتر
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <StaticMap />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}