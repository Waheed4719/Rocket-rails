import mongoose, { ObjectId } from 'mongoose';
import { H3Event } from "h3";
import { getServerSession  } from "#auth";
import TaskModel, {TaskDocument} from "../models/Task";
import { UserDocument } from "../models/User";

type TaskObj = {
  [key: string]: TaskDocument[]
}

export default defineEventHandler(async (event: H3Event) => {

  const session = await getServerSession(event);
  if(session?.user === undefined) {
    return {
      message: 'Not authorized'
    };
  }
  const user = session.user as UserDocument
  if (event.node.req.method === "GET") {
    // get project id from query params
    
    const projectId = new URL('http://localhost:3000/'+ event.node.req.url).searchParams.get('projectId')
    const tasks: TaskDocument[] = await TaskModel.find({user: user._id, project: projectId }).sort({position: 1});
    let lastPos = 0
    let index = 0
    // for (const task of tasks) {
    //   task['position'] = (index + 1) * 60000;
    //   task.save();
    //   index++
    // }

    const statuses = tasks.reduce((acc: string[], curr: TaskDocument) => {
      if (!acc.includes(curr.status)) {
        acc.push(curr.status);
      }
      return acc;
    }, []);
    const taskObj:TaskObj = {}
    for (const status of statuses) {
      taskObj[status] = tasks.filter((task: TaskDocument) => task.status === status);
    }
    return {
      taskObj,
      tasks,
      statuses,
    };
  }

  else if (event.node.req.method === "PATCH") {

    const { taskId, status, position } = await readBody(event);

    let task: TaskDocument | null = await TaskModel.findOne({_id: taskId});
    
    if(!task) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Task not found'
      })
    }
    task.status = status;
    task.position = position
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
