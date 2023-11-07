//02
//function to check if two objects are equal

const _ = require("lodash"); 

const checkObjects = (object1, object2) => {
  if (_.isEqual(object1, object2)) {
    return true;
  }
  return false;
};


console.log(`{ a: 2 } & { a: 1 } -> ${checkObjects({ a: 2 }, { a: 1 })}`);
console.log(
  `{ a: "Hello" } & { a: 1 } -> ${checkObjects({ a: "Hello" }, { a: 1 })}`
);
console.log(`{ a: 1 } & { a: 1 } -> ${checkObjects({ a: 1 }, { a: 1 })}`);
