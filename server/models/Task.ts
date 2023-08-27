import { Document, Model, model, ObjectId, Schema } from 'mongoose';

export interface Task {
  project: ObjectId;
  user: ObjectId;
  title: string;
  description: string;
  status: string;
  category?: string;
  date?: Date;
  priority?: string;
  position: Number
}

export interface TaskDocument extends Task, Document {}

export interface TaskModel extends Model<TaskDocument> {}

// This is your Mongoose Task model
const TaskSchema = new Schema<TaskDocument, TaskModel>({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
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
    enum: ['Todo', 'Backlog', 'Completed', 'In Progress', 'Review'],
  },
  category: {
    type: String,
  },
  position: {
    type: Number,
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
