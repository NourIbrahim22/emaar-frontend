import { useState } from 'react';
import { UploadCloud, Play, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import type { UserRole } from '../../types/user.types';

interface DamageAnalysisPageProps {
  userRole: UserRole;
}

export default function DamageAnalysisPage({ userRole }: DamageAnalysisPageProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <MainLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">تحليل الأضرار</h1>
          <p className="text-slate-500 mt-1">ارفع صور الأقمار الصناعية أو الطائرات المسيّرة لتشغيل نموذج الذكاء الاصطناعي</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <Card>
              <h3 className="text-lg font-bold text-slate-800 mb-4">رفع الصور</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">صورة "قبل" (Before)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#F59E0B] transition cursor-pointer bg-slate-50">
                  <UploadCloud className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">اسحب الصورة هنا أو انقر للتحميل</p>
                  <p className="text-xs text-slate-400 mt-1">JPG, PNG, TIF — الحد الأقصى 500 MB</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">صورة "بعد" (After)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#F59E0B] transition cursor-pointer bg-slate-50">
                  <UploadCloud className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">اسحب الصورة هنا أو انقر للتحميل</p>
                  <p className="text-xs text-slate-400 mt-1">JPG, PNG, TIF — الحد الأقصى 500 MB</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-slate-800 mb-4">إعدادات التحليل</h3>
              
              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">نوع الصورة</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm">
                    <option>قمر صناعي</option>
                    <option>طائرة مسيّرة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">دقة الصورة</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm">
                    <option>10m (Sentinel-2)</option>
                    <option>5m</option>
                    <option>1m</option>
                  </select>
                </div>
              </div>

              <Button 
                onClick={handleRunAnalysis} 
                className="w-full" 
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    جاري التحليل...
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    تشغيل التحليل
                  </>
                )}
              </Button>
              <p className="text-xs text-slate-400 text-center mt-2">مدة التحليل المتوقعة: 30 ثانية</p>
            </Card>
          </div>

          {/* LEFT COLUMN: Results Panel (60%) */}
          <div className="lg:col-span-7">
            {!showResults ? (
              <Card className="h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center text-slate-400">
                  <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">لا توجد نتائج بعد</p>
                  <p className="text-sm mt-1">ارفع الصور واضغط "تشغيل التحليل" لعرض النتائج</p>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <p className="text-xs text-slate-500 mb-1">المباني المكتشفة</p>
                    <p className="text-2xl font-bold text-slate-800">1,247</p>
                  </Card>
                  <Card>
                    <p className="text-xs text-slate-500 mb-1">نسبة الدمار</p>
                    <p className="text-2xl font-bold text-red-500">68%</p>
                  </Card>
                  <Card>
                    <p className="text-xs text-slate-500 mb-1">درجة الثقة</p>
                    <p className="text-2xl font-bold text-green-500">87%</p>
                  </Card>
                </div>

                <Card>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">تصنيف الأضرار</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">مدمر كلياً</span>
                        <span className="font-bold text-slate-700">848 مبنى (68%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">متضرر كبير</span>
                        <span className="font-bold text-slate-700">274 مبنى (22%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">سليم</span>
                        <span className="font-bold text-slate-700">125 مبنى (10%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">مقارنة قبل/بعد</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <div className="h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">قبل (2020)</div>
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">قبل</span>
                    </div>
                    <div className="relative">
                      <div className="h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">بعد (2024)</div>
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs py-1 rounded">بعد</span>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-3">
                  <Button variant="ghost" className="flex-1">
                    تعديل يدوي
                  </Button>
                  <Button variant="primary" className="flex-1">
                    <CheckCircle className="h-5 w-5" />
                    اعتماد النتيجة
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}