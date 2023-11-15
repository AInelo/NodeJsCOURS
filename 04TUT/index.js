const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };


// Initialisons l'objet
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // EMIT Event
    myEmitter.emit('log', 'Log event emitted');
}, 2000);
