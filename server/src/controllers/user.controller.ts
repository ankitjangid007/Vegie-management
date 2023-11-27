import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    try {
      const newUser = await userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedUser = await userService.updateUser(userId, updatedData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      await userService.deleteUser(userId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new UserController();
