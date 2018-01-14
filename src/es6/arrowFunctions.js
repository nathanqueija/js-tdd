const ireland = ['Dublin', 'Galway', 'Cork'];
// Arrow functions do not bind context
// this in arrow functions is about where they are located
const love = ireland.map(name => `I Love ${name}`);

console.log(love);

const loveChain = ireland
  .filter(name => name === 'Dublin')
  .map(name => `I Love ${name}`);

console.log(loveChain);

// this is the object that we are working

// const sandwich = {
//   bread: 'white',
//   cheese: 'cheddar',
//   prepare() {
//     return `I want a sandwich with ${this.bread} and ${this.cheese}`
//   },
//   make() {
//     var that = this;
//   },
// }
