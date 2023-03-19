import winston from 'winston';
import checkEnvinoment from '../helpers/environment';

let options = {
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      levels: winston.config.npm.levels,
      handleExceptions: true,
      colorize: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
  ],
};

// Configure file transports for staging and production environments
if (checkEnvinoment(['staging', 'beta', 'live', 'production'])) {
  const logOptions = (logFileName) => ({
    levels: winston.config.npm.levels,
    colors: winston.config.npm.colors,
    filename: `./logs/${logFileName}`,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  });

  options = {
    transports: [new winston.transports.File(logOptions('app.log'))],
    exceptionHandlers: [new winston.transports.File(logOptions('exceptions.log'))],
    rejectionHandlers: [new winston.transports.File(logOptions('rejections.log'))],
    exitOnError: false,
  };
}
const logger = winston.createLogger(options);
// A stream object that is used by `morgan middleware`
logger.stream = { write: (message) => logger.info(message) };

export default logger;
