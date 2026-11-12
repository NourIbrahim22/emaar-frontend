import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import type { UserRole } from '../../../types/user.types';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('engineer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role); 
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-[#1B2A4A] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] to-[#2D3F5F] opacity-90"></div>
        <div className="relative z-10 text-center px-12">
          <h2 className="text-4xl font-bold text-white mb-6">من صورة فضائية... إلى خطة إعمار</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            منصة ذكية تدمج الذكاء الاصطناعي والبيانات المكانية لتحويل تقييم الأضرار إلى قرارات قابلة للتنفيذ
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#1B2A4A] mb-2">إعمار</h1>
            <p className="text-sm text-slate-500">منصة تخطيط إعادة الإعمار الذكية</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">مرحباً بعودتك</h2>
            <p className="text-sm text-slate-500 mb-8">سجّل الدخول للمتابعة إلى لوحة التحكم</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pr-10 pl-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
                    placeholder="example@domain.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">كلمة المرور</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pr-10 pl-10 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-slate-400" /> : <Eye className="h-5 w-5 text-slate-400" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">الدور الوظيفي (للتجربة)</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="block w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition bg-white"
                >
                  <option value="engineer">مهندس مدني</option>
                  <option value="gov_employee">موظف حكومي</option>
                  <option value="field_team">فريق ميداني</option>
                  <option value="donor">جهة مانحة</option>
                  <option value="admin">مدير النظام (مراقب)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#F59E0B] hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] font-bold transition"
              >
                <LogIn className="h-5 w-5" />
                تسجيل الدخول
              </button>
            </form>
            
            <p className="mt-6 text-center text-sm text-slate-600">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-[#F59E0B] hover:text-[#D97706] font-bold">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-6">
            جامعة الشام الخاصة — كلية الهندسة المعلوماتية
          </p>
        </div>
      </div>
    </div>
  );
}