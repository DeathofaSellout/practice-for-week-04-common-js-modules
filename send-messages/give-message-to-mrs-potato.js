const sayHelloToed = require('./say-hello-to');
const sayHelloTo =sayHelloToed.sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");
module.exports.giveMessageToMrsPotato = giveMessageToMrsPotato;