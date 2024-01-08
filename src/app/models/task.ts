import { User } from "./user";
import { TaskStatus } from "./TaskStatus";
import { Tag } from "./tag";
export interface Task {
  id: number;
  description: string;
  createdAt: Date;
  startDate: Date;
  dueDate: Date;
  taskStatus: TaskStatus;
  isReplaced: boolean;
  tags: Tag[];
  assignedTo: User;
  assignedBy: User;
}
