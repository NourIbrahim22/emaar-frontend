import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import DashboardPage from './features/dashboard/DashboardPage';
import DamageAnalysisPage from './features/damage-analysis/DamageAnalysisPage';
import MapPage from './features/map/MapPage';
import ProtectedRoute from './routes/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { userRole } = useAuth();

  if (!userRole) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Navigate to="/dashboard" replace />} />
      <Route path="/register" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={['admin', 'gov_employee', 'engineer', 'field_team', 'donor']} currentUserRole={userRole}>
          <DashboardPage userRole={userRole} />
        </ProtectedRoute>
      } />

      <Route path="/map" element={
        <ProtectedRoute allowedRoles={['admin', 'gov_employee', 'engineer', 'field_team', 'donor']} currentUserRole={userRole}>
          <MapPage userRole={userRole} />
        </ProtectedRoute>
      } />

      <Route path="/damage-analysis" element={
        <ProtectedRoute allowedRoles={['engineer']} currentUserRole={userRole}>
          <DamageAnalysisPage userRole={userRole} />
        </ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;