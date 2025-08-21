class parent{
    displaybike(){

        console.log("This is a Dominar!!");
        
    }
}
class child extends parent{

}
const bike=new child()
bike.displaybike()

const glanza={
    manufacture:"Toyota",
    price:"14L",
    model:"Hatch-back"
}
const baleno={
    manufacture:"Suzuki",
    price:"13L",
}
baleno.__proto__=glanza
console.log(`model of baleno=${baleno.model}`);

function add(a,b){
    console.log(`sum of 2 numbers`);
    
}
function add(a,b,c){
    console.log(`sum of 3 numbers`);
    
}
function add(a,b,c,d){
    console.log(`sum of 4 numbers`);
    
}
add(3,4,7,9)

function numSum(...args){
    console.log(args);
    
}
numSum(4,5,7,9,7)