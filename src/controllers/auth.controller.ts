import { Request, Response } from "express";
import { loginSchema } from "../schemas/auth.schema";
import { checkLogin } from "../services/auth.service";

// Hiển thị form login
export const showLoginForm = (req: Request, res: Response) => {
  const error = req.flash("error");
  const success = req.flash("success");

  res.render("login.view.ejs", {
    messages: { error, success },
  });
};

// Xử lý đăng nhập
export const handleLogin = (req: Request, res: Response) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    const errorMsg = result.error.issues[0]?.message || "Dữ liệu không hợp lệ";
    req.flash("error", errorMsg);
    return res.redirect("/login");
  }

  const { email, password } = result.data;

  const user = checkLogin(email, password);

  if (user) {
    req.session.user = user;
    return res.redirect("/");
  } else {
    req.flash("error", "Email hoặc mật khẩu không chính xác");
    return res.redirect("/login");
  }
};

// Đăng xuất
export const logout = (req: Request, res: Response) => {
  req.session.user = null;
  req.flash("success", "Đăng xuất thành công");

  res.redirect("/login");
};

export const showHome = (req: Request, res: Response) => {
  res.render("home.view.ejs", {
    user: req.session.user,
  });
};
