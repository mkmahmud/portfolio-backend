import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// Create User
router.post("/create-user", userController.createUser);

// Get Singel User
router.get("/user/:id", userController.singelUser);

export const userRouter = router;
