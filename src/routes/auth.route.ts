import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { requireAuth, requireGuest } from "../middlewares/auth.middleware";

const authRouter = Router();

authRouter.get("/login", requireGuest, authController.showLoginForm);

authRouter.post("/login", authController.handleLogin);

authRouter.get("/logout", authController.logout);

authRouter.get("/", requireAuth, authController.showHome);

export default authRouter;
