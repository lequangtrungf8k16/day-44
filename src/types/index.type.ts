import "express-session";
import { User } from "./user.type";

// Mở rộng SessionData để chứa User
declare module "express-session" {
  export interface SessionData {
    user?: User | null;
  }
}
