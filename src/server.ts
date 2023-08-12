import app from "./app";
import configure from "./configure";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${configure.DB_USER}:${configure.DB_PASS}@cluster0.cjesyyc.mongodb.net/portfolio-management?retryWrites=true&w=majority`
    );
    app.listen(5000, () => console.log("Listening on port 5000"));
  } catch (error) {
    console.log(error);
  }
}

main();
