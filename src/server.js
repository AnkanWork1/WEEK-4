import { loadApp } from "./loaders/app.js";
import { connectDB } from "./loaders/db.js"; // your existing DB loader
import { config } from "./config/index.js";
import { loadEnv } from "./config/env.js";
import logger from "./utils/logger.js";
loadEnv();

async function startServer() {
  const cfg = config();

  // Connect MongoDB
  await connectDB(cfg.db.uri);

  // Load Express app
  const app = await loadApp();

  // Start server
  const PORT = cfg.port || 3000;
  app.listen(PORT, () => logger.info("✅ Server running on port 3000"));
}

startServer();
