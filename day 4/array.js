let bookArr = [1,2,3,4,5];
console.log(bookArr);

bookArr.splice(0,10);
console.log(bookArr);

let arr = [];

//callback function + map
bookArr.map = (value, index) => {
    //task nya
    bookArr.map(value, index);
    return console.log(bookArr);
};

/*bookArr.map(value, idx){

};

() => {}*/