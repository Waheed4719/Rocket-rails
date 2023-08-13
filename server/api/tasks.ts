import { Task } from "../../types";
import { tasks } from "../../data";

export default defineEventHandler(() => {
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
