//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

let result;

const annagram = (s, t) => {
  const arr1 = s.split("");
  const arr2 = t.split("");
  if (arr1.length != arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

console.log(`Input : s = "rat", t = "car"
Output : ${annagram("rat", "car")}`);
