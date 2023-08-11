export type TaskStatus = "backlog" | "todo" | "in-progress" | "completed" | "in-review"

export type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}