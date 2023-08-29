import { Schema, model } from "mongoose";
import { IMessage, messagetModel } from "./message.interface";

const messageSchema = new Schema<IMessage>({
  recivedBy: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export const messageModel = model<IMessage, messagetModel>(
  "message",
  messageSchema
);
