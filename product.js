//[product id,name,price,stock]
// [id,name, price, stock]



products=[



[1, 'hide and seek', 50,20],
[2, 'lays', 20,80],
[3, 'oreo', 40,100],
[4, "parleG", 25,0],
[5, "tiger", 20,30],
[6, "UNIBIC", 60,20],
[7,"good day", 70,20],
]




// display all product name

products.forEach(a=>console.log(a[1]));
console.log('-------------------');



// display product whose prices <50
console.log(products.filter(c=>c[2]<50));



// print price of oreo
console.log(products.find(pro=>pro[1]=="oreo")[2]);
console.log('-------------------');


// print costly product name
 console.log(products.reduce((accumulator,value)=>accumulator[1]>value[2]?accumulator:value)[1]);
 console.log('------------------');
 
// display out of stock product
console.log('stockkkkkkkkkk');

console.log(products.find(pro=>pro[3]==0));

console.log('----------------');

// display product with stock descending order
products.sort((a,b)=>b[3]-a[3])
products.forEach(pro=>console.log(pro[1],pro[3]));


// print product having maximum available stock
 console.log(products.reduce((accumulator,value)=>accumulator[3]>value[3]?accumulator:value)[1]);
// is there is any product can be purchased by Rs.10
console.log
  (products.some(pro=>pro[2]<=10)?`YES`:`NO`);
// is there is any product in the range of 20-30
console.log(products.some(a=>a[2]>=20 && a[2]>=30)?"YES":"NO")

// print all product in the range of 35-55fv
products.filter(pro=>pro[2]<=55).forEach(pro=>console.log(pro[1]));

