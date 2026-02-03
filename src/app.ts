import express, { Request, Response } from "express";
import path from "node:path";

const app = express();

app.use(express.json());

// view engine
app.set("view engine", "ejs");

// gọi tới thư mục view
app.set("views", path.join(__dirname, "views"));

// Mặc định
app.get("/", (req: Request, res: Response) => {
  res.send("Hello EJS");
});

export default app;
