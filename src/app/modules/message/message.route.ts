import express from "express";
import { messageController } from "./message.controller";

const router = express.Router();

// Create Message
router.post("/create-message", messageController.createMessage);

// Get All Message
router.get("/message/:messageFor", messageController.allMessage);

export const messageRouter = router;
