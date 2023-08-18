import { Document, Model, model, Schema } from 'mongoose';

export interface Task {
  title: string;
  description: string;
  status: string;
  category?: string;
  date?: Date;
  priority?: string;
}

export interface TaskDocument extends Task, Document {}

export interface TaskModel extends Model<TaskDocument> {}

// This is your Mongoose Task model
const TaskSchema = new Schema<TaskDocument, TaskModel>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: 'backlog',
    enum: ['todo', 'backlog', 'completed', 'in-progress', 'review'],
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
  },
},{
    timestamps: true,
});

const Task = model<TaskDocument, TaskModel>('task', TaskSchema);

export default Task;
