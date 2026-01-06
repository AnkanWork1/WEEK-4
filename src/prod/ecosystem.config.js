/**
 * PM2 Ecosystem Configuration
 * Used for production deployment
 */

export default {
  apps: [
    {
      name: "api-service",
      script: "src/server.js",

      // Node mode
      exec_mode: "cluster",
      instances: "max",

      // Restart behavior
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",

      // Logs
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      // Environment variables
      env: {
        NODE_ENV: "production"
      },

      // Graceful shutdown
      kill_timeout: 5000,
      listen_timeout: 5000,

      // Health
      min_uptime: "30s",
      max_restarts: 10
    },

    {
      name: "email-worker",
      script: "src/jobs/workers/email.worker.js",
      exec_mode: "fork",
      autorestart: true,

      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
