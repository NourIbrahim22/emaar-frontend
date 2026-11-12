import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building2, UserPlus } from 'lucide-react';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    password: '',
    confirmPassword: '',
    role: 'engineer',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
    
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">الاسم الكامل</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
            placeholder="م. أحمد الخطيب"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">البريد الإلكتروني</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
            placeholder="ahmed@moe.gov.sy"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">الجهة / المؤسسة</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Building2 className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
            placeholder="وزارة الإسكان والتعمير"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">الدور الوظيفي</label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="block w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition bg-white"
        >
          <option value="engineer">مهندس مدني</option>
          <option value="field_team">فريق ميداني</option>
          <option value="donor">جهة مانحة</option>
          <option value="viewer">مدير النظام (مراقب)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">كلمة المرور</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">تأكيد كلمة المرور</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#F59E0B] hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] font-bold transition"
      >
        <UserPlus className="h-5 w-5" />
        إنشاء الحساب
      </button>
    </form>
  );
}