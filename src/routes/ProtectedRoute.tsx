import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { UserRole } from '../types/user.types';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  currentUserRole: UserRole;
}

export default function ProtectedRoute({ children, allowedRoles, currentUserRole }: ProtectedRouteProps) {
  if (!allowedRoles.includes(currentUserRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
}