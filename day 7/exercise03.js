//03
//function to get the intersection of two objects

// const intersection = (object1, object2) => {
//   const iO1 = object1.filter((obj1) =>
//     object2.some((obj2) => obj1.id === obj2.id)
//   );

//   console.log(iO1);
// };

const intersection = (object1, object2) => {
  const entriesOb1 = Object.entries(object1);
  const entriesOb2 = Object.entries(object2);
  const mergedObjects = entriesOb1.concat(entriesOb2);
  const sortObjects = mergedObjects.sort((a, b) => a - b);
  const result = [];

//   for (i in sortObjects) {
//     if (sortObjects[i] === sortObjects[i + 1]) {
//       result.push(value[i]);
//     }
//     return result;
//   }

  console.log(entriesOb1, entriesOb2);
  console.log(mergedObjects);
  console.log(sortObjects);
};

intersection({ a: 1, b: 2 }, { a: 1, c: 3 });
