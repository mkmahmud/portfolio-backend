import { IMessage } from "./message.interface";
import { messageModel } from "./message.model";

// Create  Message
const createMessage = async (data: IMessage): Promise<IMessage> => {
  const result = await messageModel.create(data);
  return result;
};

// Get All Message
const getAllMessage = async (messageForName: string): Promise<IMessage[]> => {
  const result = await messageModel.find({ recivedBy: messageForName });
  return result;
};

export const messageService = {
  createMessage,
  getAllMessage,
};
