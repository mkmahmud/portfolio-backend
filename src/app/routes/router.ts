import express from "express";
import { userRouter } from "../modules/user/user.route";
import { ProjectRouter } from "../modules/project/user.route";
import { messageRouter } from "../modules/message/message.route";

const routes = express.Router();

// Routes
const Routers = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/project",
    route: ProjectRouter,
  },
  {
    path: "/message",
    route: messageRouter,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;
