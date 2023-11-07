// convert days to years, months and days

// 1 variable : date
// cara covert date ke tahun : date dibagi dengan 365
// cara covert date ke bulan : date di-modulo 365, dibagi dengan 30
// cara covert date ke hari : bulan di-modulo 365, di-module 30
// Rounding down hasil tahun, bulan, dan hari
// menampilkan hasil perbedaan hari dari kedua tanggal di dalam terminal

let date = 366;

let years = date / 365;
let months = (date % 365) / 30;
let days = (date % 365) % 30;

console.log(
  `convert days to years, months and days : ${Math.floor(years)} years, ${Math.floor(months)} months, ${Math.floor(days)} days`
);
