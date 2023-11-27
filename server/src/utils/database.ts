import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "../config";
import logger from "./logger";

export async function connectDatabase() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Database connection established");
  } catch (error) {
    logger.error(error, "Failed to connect with Database");
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnected from databse");

  return;
}
