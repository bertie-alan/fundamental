// find diameter, circumference and area of a circle

// diameter
// 1 variable : jari-jari
// cara mencari diameter : 2 dikali jari-jari
// menampilkan hasil diameter lingkaran di dalam terminal

// circumference
// 1 variable : jari-jari
// cara mencari keliling lingkaran : 2 dikali pi dikali jari-jari
// pembulatan hasil keliling 4 angka di belakang koma
// menampilkan hasil keliling lingkaran di dalam terminal

// area of a circle
// 1 variable : jari-jari
// cara mencari area lingkaran : pi dikali jari-jari kuadrat
// pembulatan hasil area 4 angka di belakang koma
// menampilkan hasil area lingkaran di dalam terminal

let radius = 5;

//diameter
let diameter = 2 * radius;

console.log(`diameter of circle : ${diameter}`);

//circumference
let circumference = 2 * Math.PI * radius;
circumference = circumference.toFixed(4);

console.log(`circumference of circle : ${circumference}`);

//area
let area = Math.PI * radius * radius;
area = area.toFixed(3);

console.log(`area of a circle : ${area}`);
