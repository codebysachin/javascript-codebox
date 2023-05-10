function Cat(name) {
  this.name = name;
}

Cat.prototype.sayName = function () {
  console.log(`My Name is ${this.name}`);
  console.log('Here you are using Prototypes to define properties and functions');
};

export default Cat;
