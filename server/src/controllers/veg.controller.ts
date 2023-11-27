import { Request, Response } from "express";
import vegService from "../services/veg.service";

class VegController {
  async getAllVegetables(req: Request, res: Response): Promise<void> {
    try {
      const vegetables = await vegService.getAllVegetables();
      res.status(200).json(vegetables);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getVegetableById(req: Request, res: Response): Promise<void> {
    const vegId = req.params.id;
    try {
      const vegetable = await vegService.getVegetableById(vegId);
      if (vegetable) {
        res.json(vegetable);
      } else {
        res.status(404).json({ error: "Vegetable not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createVegetable(req: Request, res: Response): Promise<void> {
    const vegData = req.body;
    try {
      const newVegetable = await vegService.createVegetable(vegData);
      res.status(201).json(newVegetable);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateVegetable(req: Request, res: Response): Promise<void> {
    const vegId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedVegetable = await vegService.updateVegetable(
        vegId,
        updatedData
      );
      if (updatedVegetable) {
        res.json(updatedVegetable);
      } else {
        res.status(404).json({ error: "Vegetable not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteVegetable(req: Request, res: Response): Promise<void> {
    const vegId = req.params.id;
    try {
      await vegService.deleteVegetable(vegId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new VegController();
