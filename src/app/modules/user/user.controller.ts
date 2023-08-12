import { Request, Response } from "express";
import { UserService } from "./user.service";

// Create User
const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.createUser(data);

  res.send({
    message: "success",
    data: result,
  });
};

// Get Singel User
const singelUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.getSingelUser(id);

  res.send({
    message: "success",
    data: result,
  });
};

export const userController = {
  createUser,
  singelUser,
};
