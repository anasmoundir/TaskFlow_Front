import { Role } from './role';
import { Task } from './task';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  dailyChangeTokens: number;
  monthlyDeletionTokens: number;
  lastChangeTokenDate?: string;
  lastDeletionTokenDate?: string;
  authorities: Role[];
  tasks?: Task[];
}
