import express from "express";
import cors from "cors";
import routes from "./app/routes/router";

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/p", routes);

router.get("/", function (req, res) {
  res.send("All systems operational");
});

export default app;
