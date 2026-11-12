import { Link } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm';

export default function LoginPage() {
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
            
            <LoginForm />
            
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