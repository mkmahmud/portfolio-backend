import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

// Create  User
const createUser = async (data: IUser): Promise<IUser> => {
  const result = await UserModel.create(data);
  return result;
};

// Get Singel User
const getSingelUser = async (email: string): Promise<IUser | null> => {
  const result = await UserModel.findOne({ email: email });
  return result;
};

export const UserService = {
  createUser,
  getSingelUser,
};
