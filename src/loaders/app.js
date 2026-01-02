import express from "express";
import productRoutes from "../routes/product.routes.js";
import userRoutes from "../routes/userRoutes.js";
import { securityMiddleware } from "../middlewares/security.js";
import { requestLogger } from "../middlewares/logger.js";
import { errorHandler } from "../middlewares/error.middleware.js";
import logger from "../utils/logger.js";

export async function loadApp() {
  const app = express();

  // Security
  securityMiddleware(app);

  // Body parser
  app.use(express.json());

  // Request logger
  app.use(requestLogger);

  // Routes
  app.get("/ping", (req, res) => res.send("pong"));
  app.get("/", (req, res) => res.send("Hello Day kebdwebwe"));
  app.use("/products", productRoutes);
  app.use("/api/users", userRoutes);

  // Error handler
  app.use(errorHandler);

  // Log server ready
  logger.info("✅ Server ready and running");

  return app;
}
