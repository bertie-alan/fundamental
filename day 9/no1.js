// nomor 1
// buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
// berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

//CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

class Food {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Restoran {
  #name = "";
  #jarak = 0;
  #total = 0;
  #foods = [];

  addFood(foods, addQty) {
    if (foods instanceof Food && qty > 0) {
      for (i in foods) {
        if (foods[i] == foods[i + 1]) {
          foods[i + 1].qty += addQty;
        } else {
          foods.qty = addQty;
          this.#foods.push(foods[i]);
        }
      }
    } else console.log("invalid food name.");
  }

  deleteFood(removedFood){
    for (let food in #foods){
      if(food[i] == removedFood){
        this.#foods.pop();
      }
    }
  }

  editFood(foodName, editedQty){
    //
  }

  //   totalBiaya(){
  //     this.#total = this.
  //   }
}
