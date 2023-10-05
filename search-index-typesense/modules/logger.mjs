/*
  Author: Kor Dwarshuis
  Created: 2023-08-29
  Updated: Date
  Description: This script is a replacement for console.log. It gives more info, like a time stamp and from where the log entry is created. This script uses the tracer module to log to the console and to a file. The log file is set to 'logs.txt' by default. To change the log file, use the setLogFile function. See the example below, in a try catch block, but you can use it everywhere you like.

    import logger from './logger.mjs';

    try {
        // Some code that might throw an error
        logger.setLogFile('success.log');
        logger.log('This code ran successfully!');
    } catch (error) {
        logger.setLogFile('error.log');
        logger.log(`An error occurred: ${error.message}`);
    }
*/

import fs from 'fs';
import tracer from 'tracer';
import { config as configDotEnv } from 'dotenv';
configDotEnv();

const logsDir = `${process.env.SEARCH_INDEX_DIR}/logs`;
let currentLogFile = 'success.log'; // default log file

const logger = tracer.console({
    // format: "{{timestamp}} [{{file}}:{{line}}] <{{title}}> {{message}}",
    format: "{{timestamp}} [{{file}}:{{line}}] {{message}}",
    dateformat: "HH:MM:ss.L",
    transport: function (data) {
        console.log(data.output); // Output to console

        // Write logs to the currently set log file
        fs.appendFile(logsDir + "/" + currentLogFile, data.output + '\n', err => {
            if (err) {
                console.error('Error writing to log file', err);
            }
        });
    }
});

logger.setLogFile = function (filename) {
    currentLogFile = filename;
}

export default logger;
