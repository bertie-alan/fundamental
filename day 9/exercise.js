// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :
// *
// **
// ***
// ****

//  ****
//   ***
//    **
//     *

//     *
//    **
//   ***
//  ****

//  ****
//  ***
//  **
//  *

//      *
//     * *
//    * * *
//   * * * *

let height = 4;
let result = "";

function triangle1(height) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
}

triangle1(height);
console.log(" ");

//  ****
//   ***
//    **
//     *

const triangle2 = (height) => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (j < i) {
        result += " ";
      } else if (j >= i) {
        result += "*";
      }
    }
    console.log(result);
    result = "";
  }
};

triangle2(height);
console.log(" ");

//     *
//    **
//   ***
//  ****
const triangle3 = (height) => {
  let k = height - 2;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (j <= k) {
        result += " ";
      } else if (j > k) {
        result += "*";
      }
    }
    k--;
    console.log(result);
    result = "";
  }
};

triangle3(height);
console.log(" ");

//  ****
//  ***
//  **
//  *
const triangle4 = (height) => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (j <= height - 1 - i) {
        result += "*";
      }
    }
    console.log(result);
    result = "";
  }
};

triangle4(height);

//      *
//     * *
//    * * *
//   * * * *
const triangle5 = (height) => {
  let k = height - 2;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (j <= k) {
        result += " ";
      } else if (j > k) {
        result += " *";
      }
    }
    k--;
    console.log(result);
    result = "";
  }
};

triangle5(height);
