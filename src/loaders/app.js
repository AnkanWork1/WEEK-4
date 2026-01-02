import express from "express";
import productRoutes from "../routes/product.routes.js"; // if you have product routes
import userRoutes from "../routes/userRoutes.js";
import { securityMiddleware } from "../middlewares/security.js";

export async function loadApp() {
  const app = express();
  securityMiddleware(app); // attach globally
  app.use(express.json());

  // Ping route
  app.get("/ping", (req, res) => res.send("pong"));

  // Optional root route
  app.get("/", (req, res) => res.send("Hello Day kebdwebwe"));

  // Product routes
  app.use("/products", productRoutes);

  app.use("/api/users", userRoutes);

  return app;
}
