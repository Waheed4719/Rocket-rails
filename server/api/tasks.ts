import { H3Event } from "h3";
import TaskModel, {TaskDocument} from "../models/Task";
import { getServerSession  } from "#auth";
import { UserDocument } from "../models/User";

export default defineEventHandler(async (event: H3Event) => {

  const session = await getServerSession(event);
  if(session?.user === undefined) {
    return {
      message: 'Not authorized'
    };
  }
  const user = session.user as UserDocument
  if (event.node.req.method === "GET") {
    const tasks: TaskDocument[] = await TaskModel.find({user: user._id});

    const statuses = tasks.reduce((acc: string[], curr: TaskDocument) => {
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
    const { title, description, category, priority, user } = await readBody(event);

    let task: TaskDocument | null = await TaskModel.create({title, description, category, priority, user});
    
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
