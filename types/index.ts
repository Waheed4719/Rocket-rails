export type TaskStatus = "backlog" | "todo" | "in-progress" | "completed" | "review"

export type TaskPriority = "Low" | "Medium" | "High"

export type TaskCategory = 'Presentation' | 'Documentation' | 'Technical' | 'Miscellaneous' | 'Design' | 'Feedback'

export type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    category: TaskCategory;
    date: string;
}