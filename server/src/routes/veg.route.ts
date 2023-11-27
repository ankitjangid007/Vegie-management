import express from "express";
import vegController from "../controllers/veg.controller";
import verifyToken from "../middleware/VerifyToken";

const router = express.Router();

router.post("/", verifyToken, vegController.createVegetable);
router.get("/", verifyToken, vegController.getAllVegetables);
router.get("/:id", verifyToken, vegController.getVegetableById);
router.patch("/:id", verifyToken, vegController.updateVegetable);
router.delete("/:id", verifyToken, vegController.deleteVegetable);

export default router;
