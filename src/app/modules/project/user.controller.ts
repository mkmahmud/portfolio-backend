import { Request, Response } from "express";
import { ProjectService } from "./user.service";

// Create Project
const createProject = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await ProjectService.createProject(data);

  res.send({
    message: "success",
    data: result,
  });
};

// Get Singel Project
const singelProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProjectService.getSingelProject(id);

  res.send({
    message: "success",
    data: result,
  });
};

// update Project
const updateProject = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const result = await ProjectService.updateProject(id, data);

  res.send({
    message: "success",
    data: result,
  });
};

// Get All Project
const allProject = async (req: Request, res: Response) => {
  const email = req.params.email;
  const result = await ProjectService.getAllProject(email);

  res.send({
    message: "success",
    data: result,
  });
};

export const ProjectController = {
  createProject,
  singelProject,
  updateProject,
  allProject,
};
