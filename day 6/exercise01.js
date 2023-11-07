//calculate array of student data
//object

class StudentData {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

let arrSortDesc = [];
let arrSortAsc = [];
let arrStudents = [];

//const arrData = [];
//let arrStudents = new Array[
//  (new StudentData("John Doe", "john@email.com", new Date("12/25/1996"), 100),
//  new StudentData("Cassie", "cassie@email.com", new Date("12/24/1996"), 80),
//  new StudentData("Flint", "flint@email.com", new Date("08/12/1996"), 90))
//];

//const studentData = {
//  name: "student1",
//  email: "student1@email.com",
//  age: new Date("August 10, 1996"),
//  score: 90,
//};

//function to calculate age
let calculateAge = (dob) => {
  let diff = Date.now() - dob.getTime();
  let age_dt = new Date(diff); //dt = date time
  return Math.abs(age_dt.getUTCFullYear() - 1970); //# inget syntax ini
};

//create object Student Data
const johnStudent = new StudentData(
  "John Doe",
  "john@email.com",
  calculateAge(new Date("12/25/1996")),
  100
);

const cassieStudent = new StudentData(
  "Cassie",
  "cassie@email.com",
  calculateAge(new Date("12/24/1996")),
  80
);

const flintStudent = new StudentData(
  "Flint",
  "flint@email.com",
  calculateAge(new Date("08/12/1996")),
  90
);

//insert data to array
arrStudents = [johnStudent, cassieStudent, flintStudent];

//blm beres
const calculateStudentData = (arrStudents) => {
  arrSortDesc = arrStudents.sort((a, b) => b - a);
  arrSortAsc = arrStudents.sort((a, b) => a - b);
};

console.log(arrStudents);
console.log(calculateStudentData(arrStudents));

/////////////////////////////eg. from Google//////////////////////////////////////
function Person(name, age) {
  this.name = name;
  this.age = age;
} // a function that prints the name of any given person var printPersonName = function (p) { console.log(p.name); };
