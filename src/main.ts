import express, { json } from "express";
import dotenv from "dotenv-safe";

dotenv.config();

const app = express();
app.use(json());

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    result: "success",
  });
});

app.listen(3005, () => {
  console.log("🚀 Server started on http://localhost:3005");
});
