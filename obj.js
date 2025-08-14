// [1002, "max", "tester", "kochi", 25000, 3]

// const emp = {
//     empid: 1002,
//     empName: "max",
//     Position: "tester",
//     location: "Kochi",
//     salary: 25000,
//     exp: 3,

// }

// console.log(emp);// to print the entire obj
// console.log(emp["empName"]);// to access data from object using key value
// console.log(emp.Position);// to access data from object using key value(using obj_name.key)

// //----------------------------------------------------------------------------------------------------------

// //to check key is present in the obj using  key in object_name
// console.log("isVaccinated" in emp ? emp["isVaccinated"] : "Key is not present");//to check key is present in the obj

// //----------------------------------------------------------------------------------------------------------

// //to check isVaccinated key is present or not using hasOwnProperty if not add it to the obj
// emp.hasOwnProperty("isVaccinated") ? console.log(emp["isVaccinated"]) : emp["isVaccinated"] = true

// //----------------------------------------------------------------------------------------------------------

// //to add 5000 to the salary 
// emp["salary"] += 5000
// console.log(emp);

// //----------------------------------------------------------------------------------------------------------

// //to access only values form the obj and give it as one by one sting 
// // for (let key in emp) {
// //     console.log(${key}:${emp[key]});

// // }

// //----------------------------------------------------------------------------------------------------------

// //to access only values form the obj and give it as an array
// console.log(Object.values(emp));//to access only values form the obj in array from

// //----------------------------------------------------------------------------------------------------------

// //to access only key form the obj and give it as an array
// console.log(Object.keys(emp));//to access only key form the obj in array from

// //----------------------------------------------------------------------------------------------------------

// //to add an data to an object using object.assign
// console.log(Object.assign(emp,{increment:"No"}));

// //----------------------------------------------------------------------------------------------------------


// // find first reccurssive character from the given pattern
// pattern= ' ABCEACC'
// result={}
// for(let ch of pattern){
//     if(result.hasOwnProperty(ch)){
//         console.log(ch);
//     break    

//     }
//     else{
//         result[ch]=null
//     }

// }
// // display number count
// array=[10, 12, 32,10, 11, 12, 22, 10,44,]
// out={}
// array.forEach(num=>out.hasOwnProperty(num)?out(num)+=1:out[num]=1)
// console.log(out);


// weatherData=[
//     {district:'Thrissur',temp:32},
//     {district:'Kottayam',temp:29},
//     {district:'Palakkad',temp:34},
//     {district:'Eranakulam',temp:33},
//     {district:'Thrissur',temp:29},
//     {district:'Kottayam',temp:30},
//     {district:'Palakkad',temp:32},
//     {district:'Eranakulam',temp:31}



// ]
// // print districts with its highest temperature
// // output{'Thrissur:32,Kottayam:30,Palakkad:34,Eranakulam:33}
// output={}
// weatherData.forEach(dist=>{
//     const district=dist['district']//trissur
//     const currentTemp=dist['temp']//29
//     if(output.hasOwnProperty(district)){
//         const prevTemp=output[district]
//         if(currentTemp>prevTemp){
//             output[district]=currentTemp

//         }
//         else{
//                    output[district]=prevTemp

//         }
//     }
//     else{
//                output[district]=currentTemp
//     }
// }

// )
// console.log(output);






//  const products=[
//     {pid:100,pName:'Apple',band:'5g',price:120000,dispaly:'led'},
//     {pid:101,pName:'Samsung',band:'5g',price:45000,dispaly:'led'},
//     {pid:102,pName:'Blueberry',band:'4g',price:50000,dispaly:'led'},
//     {pid:103,pName:'Nokia',band:'3g',price:1200,dispaly:'lcd'},
//     {pid:104,pName:'Motorola',band:'4g',price:10000,dispaly:'lcd'},


// ]

// // 1.print product name only
// // 2.print all mobile details whose display is lcd
// // 3.print 5g mobile phone name
// // 4.dispaly mobiles based on price
// // 5.print costly mobile
// // 6.print low cost mobile

// // //1 
// // output={}
// // products.forEach(Nam=>{
// //     const proname=Nam['pName']
// //     console.log(proname);
    

// // }

// // )
// console.log('--------------3-------------');
// output={}
// products.forEach(Ban=>{
//     if(Ban['band']=="5g")
//         console.log(Ban["pName"]);
        
// })
// console.log('---------------2------------------');
// products.filter(pro=>pro.dispaly=='lcd').forEach(pro=>console.log(pro.pName));


// console.log('------------4-------------');
// products.sort((p1,p2)=>p2.price-p1.price).forEach(pro=>console.log(pro.pName,pro.price));

// console.log('-----------5-----------------');
// console.log(products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName);
// console.log('----------------6--------------------');
// console.log(products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pName);











accounts=[
    {
       acno:1000,ac_type:'savings',balance:45000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1001,ac_type:'current',balance:30000,transaction:[
           {
               to:1000,amount:1000,msg:'grossary',mode:'gpay'
           },
           {
               to:1002,amount:7000,msg:'gift',mode:'phonePay'
           },
           {
               to:1003,amount:10000,msg:'emi',mode:'neft'
           },
       ]
   
    },
    {
       acno:1002,ac_type:'fixed',balance:100000,transaction:[
           {
               to:1000,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1001,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1003,ac_type:'savings',balance:30000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'n ef'
           },
           {
               to:1000,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    
   ]

// 1.print total number of accounts

// 2.print acount number whose account type is savings

// 3.print balance of account number 1000

// 4.print all gpay transactions

// 5.print all transactions whose amount>5000

// 6.print credit transaction of account 1002

// 7.print total credit amount to the account 1002

// 8.print debit transaction of account 1002

// 9.print total debit amount from the account 1002

//10. print transaction history of 1002

//11.current balance of 1002

//12. print highest  balance account details


console.log('---------------------------------1--------------------------------');
console.log("total number of acc",accounts.length);
console.log('--------------------------------------2----------------');
accounts.forEach(Acc=>{
    if(Acc['ac_type']=='savings')
        console.log(Acc["acno"]);
        
})
console.log('------------------3-----------------------------');
accounts.filter(Bal=>Bal.acno==1000).forEach(bl=>console.log(bl.balance));

console.log('----------------------4---------------');
accounts.forEach(gp=>console.log((gp.transaction).filter(gp=>gp.mode=="gpay")))
//miss
console.log(accounts.map(gp=>gp["transaction"]).flat(Infinity).filter(gp=>gp.mode=="gpay"));

console.log('----------------------------5--------------------');
accounts.forEach(gp=>console.log((gp.transaction).filter(gp=>gp.amount>5000)))
console.log(accounts.map(gp=>gp["transaction"]).flat(Infinity).filter(gp=>gp.mode>5000));
console.log('\n');

console.log('----------------------------6-------------------------');
// accounts.forEach(gp=>console.log((gp.transaction).filter(gp=>gp.to==1002)))
sum=accounts.map(gp=>gp["transaction"]).flat(Infinity).filter(gp=>gp.to==1002)
console.log(sum);

console.log('------------------------------------7------------------------');
console.log(sum.reduce((a,b)=>a+b.amount,0));
console.log('-------------------------8------------------');
debit=accounts.find(a=>a["acno"]==1002).transaction
console.log(debit);
console.log('-----------------------------------9------------------------');
totaldebit=debit.reduce((a,b)=>a+b.amount,0)
console.log(totaldebit);
console.log('-----------------------------10---------------------');
tranHistory=[...debit,...sum]
console.log(tranHistory);
console.log('------------------------11-------------------');
console.log(accounts.find(acc=>acc.acno==1000).balance);
console.log('--------------------------------12-----------------------------');
console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));



























