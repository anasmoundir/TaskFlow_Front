import { User } from './user';
import { Task } from'./task';
import { TokenType } from './TokenType'

export interface Token {
  id?: number;
  user: User;
  task?: Task;
  type: TokenType;
  createdAt?: string; 
  isConsumed: boolean;
}
