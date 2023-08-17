import { ObjectId } from "mongoose"

export type TaskStatus = "backlog" | "todo" | "in-progress" | "completed" | "review"

export type TaskPriority = "Low" | "Medium" | "High"

export type TaskCategory = 'Presentation' | 'Documentation' | 'Technical' | 'Miscellaneous' | 'Design' | 'Feedback'

export type Task = {
    _id?: ObjectId | string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    category: TaskCategory;
    date: string;
}