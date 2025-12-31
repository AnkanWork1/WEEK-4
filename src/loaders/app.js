import express from "express";
import productRoutes from "../routes/product.routes.js"; // if you have product routes

export async function loadApp() {
  const app = express();

  app.use(express.json());

  // Ping route
  app.get("/ping", (req, res) => res.send("pong"));

  // Optional root route
  app.get("/", (req, res) => res.send("Hello Day kebdwebwe"));

  // Product routes
  app.use("/products", productRoutes);

  return app;
}
