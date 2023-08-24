import { ObjectId } from "mongoose"
import { UserRole } from "server/models/User"

export type TaskStatus = "Backlog" | "Todo" | "In Progress" | "Completed" | "Review"

export type TaskPriority = "Low" | "Medium" | "High"

export type TaskCategory = 'Presentation' | 'Documentation' | 'Technical' | 'Miscellaneous' | 'Design' | 'Feedback'

export type Task = {
    _id: ObjectId | string;
    userId: ObjectId;
    user: User | ObjectId;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    category: TaskCategory;
    date: string;
}



export type Project = {
    _id: ObjectId | string;
    owner: User | ObjectId;
    title: string;
    description: string;
    status: TaskStatus;
    priority?: TaskPriority;
    category?: TaskCategory;
    date: string;
}

export type User = {
    _id: ObjectId | string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    password?: string;
}

export type BreadcrumbType = {
    name: string,
    href: string
}

export type ListBoxSelectOption = {
    label: string;
    value: string;
  };

  export type ModalActionType = 'primary' | 'secondary' | 'close' 