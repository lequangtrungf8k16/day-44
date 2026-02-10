import express, { Request, Response } from "express";
import session from "express-session";
import flash from "connect-flash";
import path from "node:path";
import router from "./routes";

const app = express();

// gọi tới thư mục public
app.use(express.static(path.join(__dirname, "..", "public")));

// view engine
app.set("view engine", "ejs");

// gọi tới thư mục view
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 30000 * 60 },
  }),
);

// Flash
app.use(flash());

// Routes
app.use(router);

// Xử lý route không tồn tại
app.use("", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route không tồn tại",
  });
});

export default app;
