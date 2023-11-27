import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
  async registerUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    try {
      const result = await authService.registerUser(userData);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const result = await authService.loginUser(email, password);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AuthController();
