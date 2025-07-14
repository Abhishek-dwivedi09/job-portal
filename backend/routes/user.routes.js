import express from "express"
import { login,updateProfile,register, logout } from "../controller/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated,updateProfile);

export default router