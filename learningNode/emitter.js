const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event',()=>{console.log("An event triggered");})
myEmitter.on('event1',()=>{console.log("An event1 triggered");})

myEmitter.emit('event')
myEmitter.emit('event1')