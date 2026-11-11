export type UserRole = 'admin' | 'viewer' | 'engineer' | 'field_team' | 'donor';

export interface User {
  id: number;
  email: string;
  full_name: string;
  role: UserRole;
  is_active: boolean;
  organization?: string;
}