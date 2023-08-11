import { Task } from "../../types";

export default defineEventHandler((event) => {
  const tasks: Task[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Task ${index + 1}`,
    description: `Description for Task ${index + 1}`,
    status:
      index % 4 === 0
        ? "backlog"
        : index % 4 === 1
        ? "todo"
        : index % 4 === 2
        ? "in-progress"
        : "completed",
  }));
  const categories = tasks.reduce((acc: string[], curr: Task) => {
    if (!acc.includes(curr.status)) {
      acc.push(curr.status);
    }
    return acc;
  }, []);
  return {
    tasks,
    categories,
  };
});
