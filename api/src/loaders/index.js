/**
 * LOADERS
 * This should be used to split the startup process into modules.
 *
 *  *  */

const Logger = require('../modules/logger/index');
const Server = require('../modules/server/express');

// for logging the loaders
const logger = new Logger('App');

function logloader(){
      //Log that loaders are loaded
      logger.info('Loaders loaded');
    }


module.exports = {
  Logger: Logger,
  Server: Server,
  Loader: logloader()
}
