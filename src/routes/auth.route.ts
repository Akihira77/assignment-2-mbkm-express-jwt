import express from "express";
import * as authController from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/login", authController.login);

export default authRoute;
