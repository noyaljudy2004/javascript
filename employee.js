// [empId, empname, designation, location, salary, experience]
employee = [
    [1000, "Akhil", "Analyst", "kochi", 15000, 3],
    [1001, "Neel", "developer", "kochi", 15000, 2],
    [1002, "Max", "Tester", "kochi", 25000, 3],
    [1003, "Maxille", "QA", "kochi", 50000, 3],
    [1004, "Vyom", "QA", "kochi", 45000, 3],
    [1005, "Lisha", "developer", "kochi", 35000, 3],
    [1006, "Ahan", "Tester", "kochi", 20000, 3],
    [1007, "Nishan", "QA", "kochi", 50000, 3],
    [1008, "Shyam", "developer", "kochi", 35000, 3],
]

// 1. Print all employee names
// 2. Print total number of employees
// 3. Print developer employee details
// 4. Print employee name and salary whose salary > 30000
// 5. Print details of employee Laisha
// 6. Display employee name and salary based on their salary descending order
// 7. Display employee name and experience based on their experience ascending order

console.log("....................................................................");

// // 1. Print all employee names

// // for(let name of employee){
// //     console.log(name[1]);
    
// // }

// console.log("....................................................................");

// // 2. Print total number of employees
// // count=0
// // for(emp in employee){
// //    count++
// // }
// // console.log(count);


// console.log("....................................................................");

// // 3. Print developer employee details

// // for(emp of employee){
// //     if(emp[2]==="developer"){
// //         console.log(emp);
        
// //     }
// // }


// // console.log("....................................................................");

// // // // 4. Print employee name and salary whose salary > 30000

// // for(emp of employee){
// //     if(emp[4]>30000){
// //         console.log(emp[1],emp[4]);
        
// //     }
// // }


// // console.log("....................................................................");

// // // // 5. Print details of employee Laisha

// // for(emp of employee){
// //     if(emp[1]=="Lisha"){
// //         console.log(emp);
        
// //     }
// // }


// // console.log("....................................................................");

// // // 6. Display employee name and salary based on their salary descending order

// // employee.sort((a,b)=>b[4]-a[4])
// // for (let emp of employee) {
// //     console.log(emp[1],emp[4]);
// //     
// // }

// // console.log("....................................................................");

// // // 7. Display employee name and experience based on their experience ascending order

// // employee.sort((a,b)=>a[5]-b[5])

// // for(let emp of employee){
// //       console.log(emp[1],emp[5],);
    //   even
// employee.forEach((emp)=>console.log(emp[1]));
// console.log('-----------------------------');
// numArry=[2,13,24,11,23]
// console.log(numArry.filter(num=>num%2==0));

// employee.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]));
// console.log('----------------------------------------');



// console.log(employee.filter(emp=>emp[4]>30000));

console.log(employee.find(emp=>emp[1]=="Lisha"));




