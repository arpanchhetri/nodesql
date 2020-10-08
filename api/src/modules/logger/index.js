// Require
// =============================================================================
const winston = require('winston');
const moment = require('moment');

class Logger {
  // Configuration
  // =============================================================================
  constructor(functionName) {
    this.functionName = functionName;
    this.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    this.logger = winston.createLogger({
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(info => {
              let message = `${this.timestamp} - [${info.level.toUpperCase()}] [functionName: ${this.functionName}]: ${info.message}`;
              if(info.details) {
                message = message + `=> ${info.details}`;
              }
              return message;
            })
          )
        }),
        new winston.transports.File({filename: './logs/logs.log'}),
        new winston.transports.File({filename: './logs/trace.log', level: 'debug'}),
        new winston.transports.File({filename: './logs/errors.log', level: 'error'})
      ]
    });
  }

  info(message, details) {
    this.logger.info({
      message: message,
      details: details
    });
  }

  debug(message, details) {
    this.logger.debug({
      message: message,
      details: details
    });
  }

  error(message, details) {
    this.logger.error({
      message: message,
      details: details
    });
  }

  warn(message, details) {
    this.logger.warn({
      message: message,
      details: details
    });
  }
}

module.exports = Logger;
