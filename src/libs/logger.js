import winston from "winston";

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/covid-updates.log",
      format: logFormat,
    }),
  ],
};

const logger = winston.createLogger(logConfiguration);
export default logger;
