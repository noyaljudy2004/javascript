
const prompt=require('prompt-sync')({sigint:true})
// let num=prompt("enter the number")
// reverse
// digit=0
// rev=0
// while(num>0){

//     digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)
   

// }
//  console.log(rev);
// factorial
// let num=prompt("enter the number")
// i=1
// fact=1
// while(i<=num){
//     fact=fact*i
//     i++
// }
// console.log(`${num}!=${fact}`);

// palindrome
// let num=prompt("enter a number")
// n=num
// digit=0
// rev=0
// while(num>0){

//     digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)
// }
// console.log(rev);

// if (n == rev) {
//     console.log(`it is a palindrome.`);
    
    
// } else {
//     console.log(`not a palindrome.`);
    
    
// }
//write a program to find 3digit number armstrong or not
   
let num=prompt("enter a number: ")

temp=num
sum=0
while (temp > 0) {
  let digit = temp % 10
  sum += digit * digit * digit
  temp = Math.floor(temp / 10)
}
if (sum==num) {
    console.log(`it is an armstrong number`);
    
    
} else {
    console.log(`it is not an armstrong`);
    
    
}





























