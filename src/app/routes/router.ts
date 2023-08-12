import express from "express";
import { userRouter } from "../modules/user/user.route";

const routes = express.Router();

// Routes
const Routers = [
  {
    path: "/user",
    route: userRouter,
  },
];

Routers.forEach((route) => routes.use(route.path, route.route));

export default routes;
