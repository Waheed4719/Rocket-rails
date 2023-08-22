import { Document, Model, model, ObjectId, Schema } from 'mongoose';

export interface Project {
  owner: ObjectId;
  title: string;
  description: string;
  status: string;
  category?: string;
  date?: Date;
  priority?: string;
}

export interface ProjectDocument extends Project, Document {}

export interface ProjectModel extends Model<ProjectDocument> {}

// This is your Mongoose Project model
const ProjectSchema = new Schema<ProjectDocument, ProjectModel>({
  owner: {
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

const Project = model<ProjectDocument, ProjectModel>('project', ProjectSchema);

export default Project;
