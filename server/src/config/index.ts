import { config } from "dotenv";

config({ path: "./.env" });

export const PORT: number = Number(process.env.PORT) || 4000;

export const DB_CONNECTION_STRING: string =
  process.env.DB_CONNECTION_STRING || "";

export const PASSWORD_SALT = process.env.PASSWORD_SALT || 10;

export const JWT_SECRET: string = process.env.JWT_SECRET || "";

export const EXPIRES_IN: string = process.env.EXPIRES_IN || "7d";
