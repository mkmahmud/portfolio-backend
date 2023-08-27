import { Model } from "mongoose";

export interface IProject {
  projectFor: string;
  projectTitle: string;
  projectKeyWord: string;
  gellaryImages: [string];
  projectCategory?: [string];
  overview: [string];
  Technologies: [string];
  solutions?: [string];
  challenges: [string];
  features: [string];
  liveSite: string;
  Duration: string;
  developersRole: string;
  Result: string;
}

export type projectModel = Model<IProject>;
