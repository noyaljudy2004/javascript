// class Employee{
//     empid
//     name
//     designation
//     salary
//     constructor(id,name,design,sal){
//         this.empid=id
//         this.name=name
//         this.designation=design
//         this.salary=sal
//     }
//     //user define method
//     displayData(){
//         console.log(`
//             employee Id:${this.empid}
//             employee Name:${this.name}
//             employee Designation:${this.designation}
//             employee salary:${this.salary}
//             `);
        

//     }
// }
// //object creation
// const emp1=new Employee('Eo1','Akhil',"developer",120000)
// emp1.displayData()


// class Student{
//     studentid
//     name
//     division
//     marks
//     constructor(id,name,division,marks){
//          this.studentid=id
//         this.name=name
//         this.division=division
//         this.marks=marks
//     }
//     displayData(){

//         console.log(`
            
//             Student Id : ${this.studentid}
//             Student Name : ${this.name}
//             Division : ${this.division}
//             Marks : ${this.marks}

//             `);}
//         }

//      const stu=new Student('001','raju',"7B",12/100)
//       const stu2=new Student('001','ramu',"8B",50/100)
//          const stu3=new Student('001','thaku',"9A",70/100)
        
//         stu.displayData()
//          stu2.displayData()
//           stu3 .displayData()


class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000},
    }
    
    
    
    //  validate account number function

validateAccount(accno){

    return  this.accountDetails.hasOwnProperty(accno)?true:false
}





    //authenticate account function
    authenicateAccount(accno,password){
          if (this.validateAccount(accno)) {
            if(this.accountDetails[accno].password==password){
                console.log("authenication successfull");
                
            }
            else{
                console.log("authenication failed invalid password");
                
            }

          }
        else{
            console.log("Invalid account");
            
        }}
        
    // balance enquiry function
    balanceEnquiry(accno){
        if(this.validateAccount(accno)){
            console.log(`Account ${accno} balance is ${this.accountDetails[accno].balance}`);
            
        }
        else{
            console.log("Invalid account");
            
        }
    }
    // function for fund transfer
fundTransfer(fromaccno, toaccno, amount) {
        if (!this.validateAccount(fromaccno)&& this.validateAccount(toaccno)){
            if(this.accountDetails[fromaccno].balance >= amount){
                console.log('--------------------before transaction----------------');
                this.balanceEnquiry(fromaccno)
                this.balanceEnquiry(toaccno)
                this.accountDetails[fromaccno].balance -= amount
                this.accountDetails[toaccno].balance += amount
                console.log("transaction completed successfully");
                console.log('--------------------after transaction--------------------------------------');
                this.balanceEnquiry(fromaccno)
                this.balanceEnquiry(toaccno)

                
                
                
            }
            else{
                console.log("insufficent balance");
                
            }
        }
        else{
            console.log("Invalid fromaccno / toaccno");
            
        }
        }


        }
const valid=new Bank()
// console.log(accNholder.validateAccount(1003)?'validate Account':'invalidate Account');
// valid. authenicateAccount(1040, "useront")
// valid.balanceEnquiry(1005)
valid.fundTransfer(1002,1003,5000)




