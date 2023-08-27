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
  const email = req.params.email;
  const result = await UserService.getSingelUser(email);

  res.send({
    message: "success",
    data: result,
  });
};

export const userController = {
  createUser,
  singelUser,
};
