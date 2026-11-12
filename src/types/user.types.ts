export type UserRole = 'admin' | 'gov_employee' | 'engineer' | 'field_team' | 'donor';

export interface User {
  id: number;
  email: string;
  full_name: string;
  role: UserRole;
  is_active: boolean;
  organization?: string;
}