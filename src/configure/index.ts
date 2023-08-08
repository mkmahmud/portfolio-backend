/* eslint-disable no-undef */
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  DB_USER: process.env.DB_USERNAME,
  DB_PASS: process.env.DB_PASSWORD,
};
