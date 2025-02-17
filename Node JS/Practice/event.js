const EventEmitter = require('events');  // importing events
 
var eventEmitter = new EventEmitter();  // initializing event emitter instances
 
var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};
 
var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};

// registering fun1 and fun2
//eventEmitter.on('myEvent', fun1);
//eventEmitter.on('myEvent', fun2);

// listening to myEvent with fun1 and fun2
eventEmitter.addListener('myEvent', fun1);

// fun2 will be inserted in front of listeners array
eventEmitter.prependListener('myEvent', fun2);

console.log(eventEmitter.listeners('myEvent'))
console.log(eventEmitter.listenerCount('myEvent'))

 // triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");

// removing listener fun1 that was registered on the line 13
eventEmitter.removeListener('myEvent', fun1);

// triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");

// removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');

// triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");
