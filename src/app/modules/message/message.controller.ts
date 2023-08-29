import { Request, Response } from "express";
import { messageService } from "./message.service";

// Create Message
const createMessage = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await messageService.createMessage(data);

  res.send({
    message: "success",
    data: result,
  });
};

// Get All Message
const allMessage = async (req: Request, res: Response) => {
  const messageFor = req.params.messageFor;
  const result = await messageService.getAllMessage(messageFor);

  res.send({
    message: "success",
    data: result,
  });
};

export const messageController = {
  createMessage,
  allMessage,
};
