export class Dog {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
    console.log('Here you are using a Class to define properties and function');
  }
}
