//11
//a function that will return primitive data types only.

let arr = [1, "[]", "undefined", "{}", "string", "{}", "[]", "[]", "undefined", 2];
let arrNonPrimitive = ["{}", "[]"];

const checkPrimitive = (arr) => {
    const primitive = arr.filter((element) => !arrNonPrimitive.includes(element));
    return primitive;
}

console.log(checkPrimitive(arr));