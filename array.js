// numArry=[2,13,24,11,23]
// console.log(numArry.map(num=>num**2));

// numArry=[2,13,24,11,23]
// console.log(numArry.map(num=>num<15?num+1:num-1));
// console.log(numArry.reduce((accumulator,value)=>accumulator<value?accumulator:value,0));
// console.log(numArry.reduce((accumulator,value)=>accumulator>value?accumulator:value,0));
// console.log(numArry.reduce((accumulator,value)=>accumulator+value));

// employee = [
//     [1000, "Akhil", "Analyst", "kochi", 15000, 3],
//     [1001, "Neel", "developer", "kochi", 15000, 2],
//     [1002, "Max", "Tester", "kochi", 25000, 3],
//     [1003, "Maxille", "QA", "kochi", 50000, 3],
//     [1004, "Vyom", "QA", "kochi", 45000, 3],
//     [1005, "Lisha", "developer", "kochi", 35000, 3],
//     [1006, "Ahan", "Tester", "kochi", 20000, 3],
//     [1007, "Nishan", "QA", "kochi", 50000, 3],
//     [1008, "Shyam", "developer", "kochi", 35000, 3],
// ]
// // lowest salary
// console.log(employee.reduce((accumulator,value)=>accumulator[4]<value[4]?accumulator:value));
// largest salary
// console.log(employee.reduce((accumulator,value)=>accumulator>value[4]?accumulator:value[4]));
// sum
// console.log(employee.reduce((accumulator,value)=>accumulator+value[4],0));
// // or
// console.log(employee.map(emp=>emp[4]).reduce((a,b)=>a+b));
//  console.log(employee.reduceRight((accumulator,value)=>accumulator[4]<value[4]?accumulator:value));

covid_data=[
    // [no, district, ve cases, death rate, curred rate, ist dose vaccine, second dose vaccine
    [1,"ernkulama",34000,2000,23000,20000,2000],
    [2,"idukki",14000,3000,25000,30000,1000],
    [3,"trissur",24000,4000,33000,24000,2500],
    [4,"pathanamthitta",20000,2000,45000,22000,1500],
    [5,"Kozhikkode",44000,5000,12000,21000,500],
    [6,"palakkad",12000,1000,20000,23000,3400],
    [7,"kottayam",27000,1500,27000,14000,1000],
    [8,"kollam",14000,2500,25000,18000,2700],
]
//district having highest +ve case
// district having highest ist dose vaccine
// district having lowest death rate
// display district with +ve cases in descending order
// is district with +ve case>15000
// display district with 1st dose vaccine
// in ascending order
// print trissur details
// print total number of +ve cases
// print total number of curred cases
// print curred case in iduki
// 1
// console.log(covid_data.reduce((accumulator,value)=>accumulator[2]>value[2]?accumulator:value));

// 2
// console.log(covid_data.reduce((accumulator,value)=>accumulator[5]>value[5]?accumulator:value));
// 3



// console.log(covid_data.reduce((accumulator,value)=>accumulator[3]<value[3]?accumulator:value));
// 4
// ds=covid_data.sort((a,b)=>b[2]-a[2])
// console.log(ds);
// 6
// ds=covid_data.sort((a,b)=>a[5]-b[5])
// console.log(ds);
// 7
// total sum
// console.log(covid_data.reduce((accumulator,value)=>accumulator+value[2],0));
// totalsum
// console.log(covid_data.reduce((accumulator,value)=>accumulator+value[4],0));
// console.log(covid_data.find(cov=>cov[1]=="trissur"));
//  console.log
//   (covid_data.some(d1=>d1[2]>15000)?`YES`:`NO`);

// console.log(covid_data.find(cov=>cov[1]=="idukki")[4]);

// console.log(covid_data.reduce((acc,val)=>acc+val[4],0));






