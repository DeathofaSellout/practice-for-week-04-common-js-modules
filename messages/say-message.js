const helloMessaged = require('./hello-message.js');
const helloMessage = helloMessaged.helloMessage;
const sayHelloToed = require('../send-messages/say-hello-to.js');
const sayHelloTo = sayHelloToed.sayHelloTo;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports.sayMessage = sayMessage;