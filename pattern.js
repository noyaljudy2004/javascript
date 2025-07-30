const prompt=require('prompt-sync')({sigint:true})
// num=prompt("enter a number")

// // for(i=0;i<num;i++){
// //     let row=""

// //     for(j=0;j<num;j++){
// //         row += "1"
// //     }
// //     console.log(row);
    

// // }
// // Miss
// for(row=1;row<=4;row++){
//     pattern=""
//     for(col=1;col<=4;col++){

//         pattern=pattern+row+""
//     }
//     console.log(pattern);
    

// }
num=prompt("enter a number")

// for(i=0;i<num;i++){
//     let row=""

//     for(j=0;j<num;j++){
//         row += "1"
//     }
//     console.log(row);
    

// }
// Miss
// for(row=1;row<=4;row++){
//     pattern=""
//     for(col=1;col<=4;col++){

//         pattern=pattern+col+""
//     }
//     console.log(pattern);
    

// }
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row =row+j+"";
//   }
//   console.log(row);
// }
//  for(row=1;row<=4;row++){

// for (let i = 1; i <= num; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row =row+i+"";
//   }
//   console.log(row);
// }
// pymarid

//  for (let i = 1; i <= num; i++) {
//   let row = "";
//   for (let s = num; s >= i; s--) {
//     row+=" ";
//   }
//   for (let j = 1; j <= i; j++) {
//     row+="* ";
//   }
//   console.log(row);
// }
// flowsqel

 for (let i = 1;i <= 4;i++) {
  let row = "";
  
  for (let j = 1; j <= 7; j++) {
    if (i==4 || i+j==5 || j-i==3) {
        row+="* "
        
    } else {
        row+=" "
    }
   
  }
 
  console.log(row);
}