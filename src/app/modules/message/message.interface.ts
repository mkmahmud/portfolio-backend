import { Model } from "mongoose";

export interface IMessage {
  recivedBy: string;
  email: string;
  name: string;
  message: string;
  createAt: Date;
}

export type messagetModel = Model<IMessage>;
