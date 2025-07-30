// function addnum(a,b){
//     result=a+b
//     // console.log(`sum=${result}`);
//     return result
    
// }
//  console.log(`sum=${addnum(12,15)}`);
// cube
// function cube(a){
//     result=a*a*a
//     return result
// }
// console.log(`cube=${cube(5)}`);
// odd or even
// function oddeven(a){

//     if(a%2==0){
//         result="even number"
//         return result
//     }   else{
//         result="odd number"
//         return result
        
//     } 
// }
//  console.log(`given number=${ oddeven(5)}`);

//sum
// const addnum=(a,b)=>a+b
// console.log(`sum=${addnum(12,17)}`);
//cube
// const cube=(a)=>a**3
// console.log(`cube=${cube(6)}`);
// alertbox
// setTimeout(()=>console.log("hello"),3000);
// globalData = "globalData!!!"
// function parent(){
//     parentData = "ParentData!!"
//     console.log("inside parent function");
//     console.log(`inside parent function globaldata=${globalData} and parentdata=${parentData}`);

//     return function child(){
//     childData = "childData!!"
//     console.log("inside child function");
//     console.log(`inside child function globaldata=${globalData} and childdata=${childData} and parentData=${parentData}`);


//     }
    
    
// }
// child=parent()
// child()

// recursivefunction
function countDown(num){
    console.log(num);
    if(num>1){
        countDown(num-1)
    }
    
}
countDown(100)