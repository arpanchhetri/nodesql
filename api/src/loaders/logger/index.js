const winston = require('winston');

class Logger {
  constructor(fileName) {
    this.fileName = fileName;
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${fileName}.log`
        })
      ],
      format: winston.format.printf((info) => {
        let message = `[${info.level.toUpperCase()}] [Filename: ${fileName}.log] - ${info.message}`
        message = info.obj ? message + `data:${JSON.stringify(info.obj)} | ` : message
        return message
      })
    });
  }

  info(message) {
    this.logger.info(message);
  }

  debug(message) {
    this.logger.debug(message);
  }

  error(message) {
    this.logger.error(message);
  }

  warn(message) {
    this.logger.warn(message);
  }
}

module.exports = Logger;
