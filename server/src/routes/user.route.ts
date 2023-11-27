import express from "express";
import userController from "../controllers/user.controller";
import verifyToken from "../middleware/VerifyToken";

const router = express.Router();

// router.post("/", userController.createUser);
router.get("/", verifyToken, userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUserById);
router.patch("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);

export default router;
