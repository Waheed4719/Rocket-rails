import { H3Event } from "h3";
import { getServerSession  } from "#auth";
import { UserDocument } from "../models/User";
import ProjectModel, { ProjectDocument } from "../models/Project";


export default defineEventHandler(async (event: H3Event) => {

    const session = await getServerSession(event);
    if(session?.user === undefined) {
      return {
        message: 'Not authorized'
      };
    }
    const user = session.user as UserDocument
    if (event.node.req.method === "GET") {
      const projects: ProjectDocument[] = await ProjectModel.find({owner: user._id});

      return {
        projects,
        message: "Projects fetched successfully"
        };
    }

    else if (event.node.req.method === "POST") {
        const { 
            ownerId,
            title,
            description 
          } = await readBody(event);
        const project: ProjectDocument = await ProjectModel.create({
            owner: ownerId,
            ownerId,
            title,
            description});
  
        return {
          project,
          message: "Projects fetched successfully"
          };
      }
  
   
  });
  