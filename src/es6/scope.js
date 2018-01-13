// let variables are block scoped
let sound = 'meow';
sound = 'test';
console.log(sound);

// const has constant values, it is not possible to reassign new values
// const is not an immutable object, you can not just reassign its value
const name = 'jake';
const nathan = {
  name: 'Nathan',
  age: 50,
};

console.log(name);
nathan.age = 27;
console.log(nathan);

function sayAnimal() {
  // variable animal belongs to this block scope
  // var are function scoped, or the are function scoped or are global
  let animal = 'cat';
  animal = 'dog';
  console.log(animal);
}

sayAnimal();
