// Dog is defined using ES6 Class
import { Dog } from './Dog.js';
// Cat is defined using Prototypes
import Cat from './Cat.js';

const clifford = new Dog('Clifford');
clifford.sayName();
console.log('---------------');

const tom = new Cat('Tom');
tom.sayName();
console.log('---------------');