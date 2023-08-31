import { Schema, model } from "mongoose";
import { IUser, userModel } from "./user.interface";

const userSchema = new Schema<IUser>({
  userLogo: {
    type: String,
    required: true,
  },
  userLogoName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userTitles: {
    type: [String],
    required: true,
  },
  shortTechnologies: {
    type: [Object],
  },
  sideSkills: {
    type: [Object],
  },
  githubLink: {
    type: String,
    required: true,
  },
  linkedinLink: {
    type: String,
    required: true,
  },
  githubUserName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: [String],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  experience: {
    type: [Object],
    required: true,
  },
  education: {
    type: [Object],
    required: true,
  },
  skills: {
    type: [Object],
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export const UserModel = model<IUser, userModel>("user", userSchema);
