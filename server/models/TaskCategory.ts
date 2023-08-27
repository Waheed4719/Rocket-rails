import { Document, Model, model, ObjectId, Schema } from 'mongoose';

export interface TaskCategory {
  project: ObjectId;
  user: ObjectId;
  title: string;
}

export interface TaskCategoryDocument extends TaskCategory, Document {}

export interface TaskCategoryModel extends Model<TaskCategoryDocument> {}

// This is your Mongoose TaskCategory model
const TaskCategorySchema = new Schema<TaskCategoryDocument, TaskCategoryModel>({
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
  }
},{
    timestamps: true,
});

const TaskCategory = model<TaskCategoryDocument, TaskCategoryModel>('TaskCategory', TaskCategorySchema);

export default TaskCategory;
