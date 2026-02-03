import express, { Request, Response } from "express";
import path from "node:path";
import { UserResponse } from "./types/user.type";

const app = express();

app.use(express.json());

// view engine
app.set("view engine", "ejs");

// gọi tới thư mục view
app.set("views", path.join(__dirname, "views"));

// Route mặc định
app.get("/", (req: Request, res: Response) => {
  res.send("Hello EJS");
});

app.get("/user", (req: Request, res: Response) => {
  const users: UserResponse[] = [
    {
      id: 1,
      name: "Trung",
      email: "trung@gmail.com",
      createdAt: new Date(),
    },
  ];
  return res.json(users);
});

// Xử lý route không tồn tại
app.use("", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route không tồn tại",
  });
});

export default app;
