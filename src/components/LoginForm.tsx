import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          البريد الإلكتروني
        </label>
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
        <label className="block text-sm font-medium text-slate-700 mb-2">
          كلمة المرور
        </label>
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
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-slate-400" />
            ) : (
              <Eye className="h-5 w-5 text-slate-400" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-slate-300 text-[#F59E0B] focus:ring-[#F59E0B]" />
          <span className="mr-2 text-sm text-slate-600">تذكرني</span>
        </label>
        <Link to="/forgot-password" className="text-sm text-[#F59E0B] hover:text-[#D97706] font-medium">
          نسيت كلمة المرور؟
        </Link>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#F59E0B] hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] font-bold transition"
      >
        <LogIn className="h-5 w-5" />
        تسجيل الدخول
      </button>
    </form>
  );
}