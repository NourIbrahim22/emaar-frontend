import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import MapPage from './features/map/MapPage';
import DamageAnalysisPage from './features/damage-analysis/DamageAnalysisPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/map" element={<MapPage />} />
      <Route path="/damage-analysis" element={<DamageAnalysisPage />} />
      <Route path="/dashboard" element={
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;