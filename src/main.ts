import express, { json } from "express";

const app = express();
app.use(json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello, TypeScript!" });
});

app.listen(3005, () => {
  console.log("🚀 Server started on http://localhost:3005");
});