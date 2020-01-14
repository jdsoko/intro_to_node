const debug = require('debug');
debug.enable('*');
const logger = debug('hello-world-logger');

logger('Testy test test');
logger('Second testy test test');

const fs = require('fs');

const { animateString } = require('./animate-string');

const contents = fs.readdirSync('./animals');
animateString(contents.join('\n'));
