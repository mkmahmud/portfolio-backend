import { IProject } from "./project.interface";
import { ProjectModel } from "./user.model";

// Create  Project
const createProject = async (data: IProject): Promise<IProject> => {
  const result = await ProjectModel.create(data);
  return result;
};

// Get Singel Project
const getSingelProject = async (id: string): Promise<IProject | null> => {
  const result = await ProjectModel.findById(id);
  return result;
};

// Update Project
const updateProject = async (
  projectId: string,
  newData: Partial<IProject>
): Promise<IProject | null> => {
  const result = await ProjectModel.findByIdAndUpdate(projectId, newData, {
    new: true,
  });
  return result;
};

// Get All Project
const getAllProject = async (email: string): Promise<IProject[]> => {
  const result = await ProjectModel.find({ projectFor: email });
  return result;
};

export const ProjectService = {
  createProject,
  getSingelProject,
  updateProject,
  getAllProject,
};
