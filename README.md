```
npm link
```

### [Pour poser la question à l'utilisateur](https://github.com/becodeorg/LIE-Jepsen-2.14/blob/master/01-the-field/js-basics-algo/01-intro.md) :

```
Type one and only one time this line of code at the top of your file to import the little library we installed earlier:

const readlineSync = require("readline-sync");
Then you can do this:

let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
It's not frequently used in real-life programs but it will be useful for simple exercises.
```

### [Pour récupérer les cods des pays:](https://www.npmjs.com/package/country-list)

##### Example

```
const { getCode, getName } = require('country-list');

console.log(getName('IS')); // Iceland
console.log(getCode('Iceland')); // IS
console.log(getCode('Nowhere-to-be-found-land')); // undefined
```
