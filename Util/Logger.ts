
import winston from 'winston';
import fs from 'fs';
import path from 'path';

// Path to the log file
const logFilePath = path.join(__dirname, '../Logs', 'log.txt');

// Ensure the logs directory exists
const logsDir = path.join(__dirname, '../Logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Clear the log file before starting new execution
// if (fs.existsSync(logFilePath)) {
//   fs.unlinkSync(logFilePath);  // Delete the existing log file
// }

let logger:any;
// Create a custom logger
 logger = winston.createLogger({
  level: 'info', // Log level can be 'info', 'warn', 'error', etc.
  format: winston.format.combine(
    winston.format.colorize(),  // Add color to the log level
    winston.format.simple(),    // Simple formatting
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp
    winston.format.printf(({ timestamp,message }) => {
      return `${timestamp}  ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({
      filename: logFilePath, // Log to a file named log.txt
      level: 'info', // Logs info level and above to the file
    })
  ]
});

// Export the logger to be used in other files
export default logger;
