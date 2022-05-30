const sayMessaged = require('../messages/say-message.js')
const sayMessage = sayMessaged.sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports.sayHelloTo = sayHelloTo;