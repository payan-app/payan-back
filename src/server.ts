/**
 * Main module.
 */

import { config } from './config';
import { Express } from './express'

class Server {
    static run() {
        let express = new Express()
        express.app.listen(config.port, config.host, () => {
            console.log(`server started on port: ${config.port}`);
        }).on('error', function(err: any) {
            process.exit()
        });
    }
}

Server.run()