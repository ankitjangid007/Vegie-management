import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";
import { initSocket } from "./utils/socketConfig";
import { connectDatabase, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";

// Routes
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import vegRoutes from "./routes/veg.route";
import { PORT } from "./config";

dotenv.config();
const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/vegetables", vegRoutes);

const server = http.createServer(app);

const io = initSocket(server);

server.listen(PORT, async () => {
  await connectDatabase();
  logger.info(`Server is up @${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info("Goodbye, got signal", signal);
    server.close();

    // disconnect from the db
    await disconnectFromDatabase();

    logger.info("My work here is done");

    process.exit();
  });
};

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
