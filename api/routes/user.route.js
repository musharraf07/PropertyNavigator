import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import jwt from "jsonwebtoken";
const verifyToken = jwt.verify;

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
export default router;
