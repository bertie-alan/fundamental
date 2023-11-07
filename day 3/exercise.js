//01
//display the multiplication table of a given integer

let numberMultiplication = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${numberMultiplication} x ${i}`);
}

//02
//check whether a string is a palindrome or not

let word = "refer";
let splitWordArr = [];
let reversedWordArr = [];
let reversedWord = "";

splitWordArr = word.split(""); //console.log(`${splitWordArr}`);

reversedWordArr = splitWordArr.reverse(); //console.log(`${reversedWordArr}`);

reversedWord = reversedWordArr.join(""); //console.log(`${reversedWord}`);

if (word === reversedWord) {
  console.log(`${word} -> palindrome.`);
} else {
  console.log(`${word} -> not a palindrome.`);
}

//03
//convert centimeter to kilometer

let centimeter = 100000;
let kilometer = 0;

kilometer = centimeter / 100000;
console.log(`${centimeter} -> "${kilometer} km"`);

//04
//format number as currency (IDR)

let number = "1000";
let currencySplitArr = [];
let currencyResult = "";

currencySplitArr = number.split("");
console.log(currencySplitArr);

for (let i = number.length; i >= 0; i--){
    
}

//console.log(`${number} -> "Rp. "`);

