import { H3Event } from "h3";
import { Task } from "../../types";
import TaskModel, {TaskDocument} from "../models/Task";

export default defineEventHandler(async (event: H3Event) => {
  if (event.node.req.method === "GET") {
    const tasks: Task[] = await TaskModel.find();

    const statuses = tasks.reduce((acc: string[], curr: Task) => {
      if (!acc.includes(curr.status)) {
        acc.push(curr.status);
      }
      return acc;
    }, []);

    return {
      tasks,
      statuses,
    };
  }

  else if (event.node.req.method === "PUT") {
    const { taskId, status } = await readBody(event);

    let task: TaskDocument | null = await TaskModel.findOne({_id: taskId});
    
    if(!task) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Task not found'
      })
    }
    task.status = status;
    task = await task.save();
    return {
      message: 'Task updated successfully',
      task: task
    };
  }

  else if (event.node.req.method === "POST") {
    const { title, description, category, priority } = await readBody(event);

    let task: TaskDocument | null = await TaskModel.create({title, description, category, priority});
    
    if(!task) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Task not found'
      })
    }
    return {
      message: 'Task created successfully',
      task: task
    };
  }
  return "This is an unsupported method";
});
