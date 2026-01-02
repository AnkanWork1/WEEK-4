import pino from "pino";
import path from "path";
import fs from "fs";

// Ensure logs folder exists
const logDir = path.join(process.cwd(), "src/logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

const logFile = path.join(logDir, "log.txt");

const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info",
    timestamp: pino.stdTimeFunctions.isoTime, // ISO timestamp
  },
  pino.destination(logFile)
);

export default logger;
