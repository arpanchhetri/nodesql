// Require
// =============================================================================

const express = require('express');
const Logger = require("../logger/index");


// Configuration
// =============================================================================
const port = 8888;
const hostname = '0.0.0.0';
const logger = new Logger('App');

class Server {
    run() {
        // Create Express apps
        var apiApp = express();

        // Request mapping
        apiApp.use(express.json());

        // Routers to be used with the api
        var apiRouter = express.Router();

        apiRouter.get('/', (req, res) => {
            res.json({ message: 'Hello, world!' });
        });

        // REGISTER OUR ROUTES (all routes prefixed)
        // =============================================================================
        const prefix = '';
        apiApp.use(prefix, apiRouter);

        const apiServer = apiApp.listen(port, hostname, () => {
            logger.info(`-------- API Configured --------\n> URL: http://${hostname}:${port}${prefix}\n--------------------------------`)
        });
  }
}



module.exports = Server;