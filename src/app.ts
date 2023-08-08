import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();

router.get("/", function (req, res) {
  res.send("All systems operational");
});

app.use(cors());
app.use(router);

export default app;
