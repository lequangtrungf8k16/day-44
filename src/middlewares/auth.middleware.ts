import { NextFunction, Request, Response } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.session.user) {
    return next();
  } else {
    return res.redirect(`/login`);
  }
};

export const requireGuest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.session.user) {
    return res.redirect("/");
  } else {
    return next();
  }
};
