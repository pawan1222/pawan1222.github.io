import express from "express";
import { authenticate, authorize } from "./auth.js";
import {
  register,
  login,
  showUsers,
  userUpdate,
  userDelete,
} from "./userController.js";
const Router = express.Router();
Router.post("/register", register);
Router.patch("/:id", authenticate, authorize("admin"), userUpdate);
Router.delete("/:id", authenticate, authorize("admin"), userDelete);
Router.get("/users", authenticate, authorize("admin"), showUsers);
Router.post("/login", login);
export default Router;