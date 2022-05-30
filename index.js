
const helloMessaged = require('./messages/hello-message.js');
const helloMessage = helloMessaged.helloMessage;
const indexed = require('./messages/index.js');
const msg1 = indexed.message1;
const msg2 = indexed.message2;
const msg3 = indexed.message3;
const sayMessaged = require('./messages/say-message');
const sayMessage = sayMessaged.sayMessage;
const giveMessageToMrsPotatoed = require('./send-messages/give-message-to-mrs-potato');
const giveMessageToMrsPotato = giveMessageToMrsPotatoed.giveMessageToMrsPotato;
const sayHelloToed = require('./send-messages/say-hello-to');
const sayHelloTo = sayHelloToed.sayHelloTo;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);