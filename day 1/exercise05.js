// get difference between dates in days

// 2 variable : date1 dan date2
// cara mencari perbedaan hari dari kedua tanggal : date2 dikurang date1
// calculate hasil tanggal dari time ke hari : hasil pengurangan sebelumnya dibagi dengan (24 * 3600 * 1000) 
// notes : (h,m,s)
// menampilkan hasil perbedaan hari dari kedua tanggal di dalam terminal

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

let result = date2 - date1;
result /= (24 * 3600 * 1000);

console.log(`difference between dates in days : ${result}`);
