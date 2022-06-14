import { User } from "../src/entities/User";


declare global {
  namespace Express {
    interface Request {
      user: User;
      decoded: User;
    }
  }
}
