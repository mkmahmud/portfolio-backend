import { Model } from "mongoose";

export interface IUser {
  userLogo: string;
  userLogoName: string;
  userName: string;
  userTitles: [string];
  githubLink: string;
  linkedinLink: string;
  githubUserName: string;
  userImage: string;
  aboutMe: [string];
  email: string;
  phoneNumber?: string;
  experience: [
    {
      title: string;
      company: string;
      duration: string;
      about: string;
    },
  ];
  education: [
    {
      degreeTitle: string;
      universitry: string;
      duration: string;
      about: string;
    },
  ];
  skills: [
    {
      techName: string;
      techImage: string;
    },
  ];
  resume: string;
  location: string;
  title: string;
}

export type userModel = Model<IUser>;
