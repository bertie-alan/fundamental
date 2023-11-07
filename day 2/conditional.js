let age = 16;

if (age >= 17) {
  console.log("Anda dapat membuat ktp.");
} else {
  console.log("Anda belum cukup umur untuk membuat ktp.");
}

// Truthy, falsy

if (0) console.log("this is falsy. won't return any output");
if (1) console.log("this is truthy.");

// Ternary operator
let gender = "female";
gender === "male"
  ? console.log("namanya flint")
  : console.log("namanya roosevelt");
