import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-[#1B2A4A] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] to-[#2D3F5F] opacity-90"></div>
        <div className="relative z-10 text-center px-12">
          <h2 className="text-4xl font-bold text-white mb-6">انضم إلى فريق إعادة الإعمار</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            سجّل حسابك للوصول إلى أدوات التقييم والتخطيط وإدارة المشاريع
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#1B2A4A] mb-2">إعمار</h1>
            <p className="text-sm text-slate-500">منصة تخطيط إعادة الإعمار الذكية</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">إنشاء حساب جديد</h2>
            <p className="text-sm text-slate-500 mb-8">املأ البيانات التالية للانضمام إلى المنصة</p>
            
            <RegisterForm />
            
            <p className="mt-6 text-center text-sm text-slate-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-[#F59E0B] hover:text-[#D97706] font-bold">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}