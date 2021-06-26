var customers = [
  {'id':1,'nama':'Eri','alamat':"jln graha jati no 15"},
  {'id':2,'nama':'Akbar','alamat':"jln dipati uku no 15"}
];
var products = [
  {'id':1,'product_name':'Baju','price':100000},
  {'id':2,'product_name':'Celana','price':150000}
];
var transactions = [
  {'id':1,'customers_id':1,'product_id':1,'purchase_date':'2021-05-24','quantity':2},
  {'id':2,'customers_id':1,'product_id':2,'purchase_date':'2021-05-24','quantity':1},
  {'id':1,'customers_id':2,'product_id':1,'purchase_date':'2021-05-23','quantity':2},
];

function combined(c, p, t){
  let temp = []

  // for(i = 0; i < c.length; i++){
  //   temp.push(c[i])
  //   console.log(c[i].id)
  //   for(j = 0; j < t.length; j++){
  //     if(c[i].id === t[j].customers_id){
  //       temp.push(t[i])
  //     } 
  //   }
  // }
  customers.map(c => temp.push(c));

  transactions.map(t => {
    t["product"] = products.filter((index) => {
      return t.product_id == index.id
    })
  })

  temp.map(x => {
    x["transactions"] = transactions.filter((index) => {
      return x.id == index.customers_id
    })
  })

  return temp
}

let temp = []

const newMap = customers.map(c => temp.push(c.nama))

console.log(combined(customers, products, transactions))
console.log(newMap);

//pertanyaan
//dengan data yang telah dibuat diatas buatlah sebuah variable array sehingga data tersebut berisi seperti pada file output.json atau gambar 2
//jawaban
