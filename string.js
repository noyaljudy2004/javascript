// str="C"
// console.log(str.length);
 str1="java script"
// console.log(str1.substring(5,11));
// console.log(str1.startsWith("java"));
// console.log(str1.endsWith("script"));
// console.log(str1.toUpperCase().substring(5,11));


// str2=" oreo "
// console.log(str2);
// console.log(str2.trim());
// console.log(str1.split("p"));
// console.log(str1.split(""));

// console. log(str1.split()):

console.log('-------------------------------------------------------------');

// check an email is valid or not
email="abcd@gmail.com"
console.log(email.endsWith("com"));


// check given word starts with "Ma"
word="Malayalam"
console.log(word.startsWith("Ma"));

// display word count of given para
para="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
console.log(para.split(" ").length);

// display all vowels from given data
data="hello hai"
vowels=['a','e','i','o','u'] 
console.log( data.split("").filter(char=>vowels.includes(char)));

// // [id, name, price, stock]
products=[
[1, 'hide and seek', 50,20],
(2, 'lays' ,20,80),
 [3, 'oreo',40,100],
[4, "parleG", 25,0],
     [5, "tiger" ,20,30], 
     [6, "UNIBIC", 60,20], 
     [7, "good day", 70,20],
]

// search a string available in the product array.it return array of product which includes the given string, otherwise display no products arae available
// ex: search :a
// output: [hide and seek', lays, parle, Ggood day,]
// search: by
// output no oroducts are available

search="a"
filterArray=products.filter(p=>p[1].includes(search))
// 
if(filterArray.length>0){
    console.log( filterArray.map(pro=>pro[1]));
    
}
else{
    console.log("No products are available");
    
}
console.log(str1.slice(-6,-4));








