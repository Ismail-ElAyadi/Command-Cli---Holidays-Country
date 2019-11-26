# NodeJS--CLi-Npx-card

Exercices BeCode Utilisation Node JS

Ligne de commande pour récupérer tous les jours de vacances d'un pays en fonction de son année :
 
```
$ npx @sma3il/holidays {Nom Du pays en Anglais} {Année en 4 chiffres}
```

J'ai utilisé ceci :

### [Création de ligne de commande ](https://blog.bitsrc.io/how-to-build-a-command-line-cli-tool-in-nodejs-b8072b291f81)

```
npm link
```

### [Pour poser la question à l'utilisateur (ancienne version)](https://github.com/becodeorg/LIE-Jepsen-2.14/blob/master/01-the-field/js-basics-algo/01-intro.md) :

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
