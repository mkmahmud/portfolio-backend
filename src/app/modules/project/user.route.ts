import express from "express";
import { ProjectController } from "./user.controller";

const router = express.Router();

// Create Project
router.post("/create-project", ProjectController.createProject);

// Update Project
router.patch("/update-project/:id", ProjectController.updateProject);

// Get Singel Project
router.get("/project/:id", ProjectController.singelProject);

// Get All Project
router.get("/all-project/:email", ProjectController.allProject);

export const ProjectRouter = router;
