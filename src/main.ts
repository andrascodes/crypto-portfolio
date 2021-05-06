import express, { json } from "express";
import dotenv from "dotenv-safe";

dotenv.config();

const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL;

const app = express();
app.use(json());

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    result: "success",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on ${APP_URL}:${PORT}`);
});
