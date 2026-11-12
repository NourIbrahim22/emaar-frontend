import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected Routes - للتبسيط حالياً، سنضيف الحماية لاحقاً */}
      <Route path="/dashboard" element={
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;