import { Schema, model } from "mongoose";
import { IProject, projectModel } from "./project.interface";

const projectSchema = new Schema<IProject>({
  projectFor: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectKeyWord: {
    type: String,
    required: true,
  },
  gellaryImages: {
    type: [String],
    required: true,
  },
  projectCategory: {
    type: [String],
    required: true,
  },
  overview: {
    type: [String],
    required: true,
  },
  Technologies: {
    type: [String],
    required: true,
  },
  solutions: {
    type: [String],
    required: true,
  },
  challenges: {
    type: [String],
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  liveSite: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  developersRole: {
    type: String,
    required: true,
  },
  Result: {
    type: String,
    required: true,
  },
});

export const ProjectModel = model<IProject, projectModel>(
  "project",
  projectSchema
);
