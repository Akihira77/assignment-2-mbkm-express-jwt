import express from "express";
import * as teacherController from "../controllers/teacher.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const teacherRoute = express.Router();

teacherRoute.get("/", authMiddleware, teacherController.getAllTeacher);

export default teacherRoute;
