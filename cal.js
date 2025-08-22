const displayData=(data)=>{
    const display = document.getElementById('output')
    display.value+=data
}
const allClear=()=>{
    const display = document.getElementById('output')
    display.value =""
    display.placeholder = 0
}
// clear last character
const clearOne = () => {
  const ot = document.getElementById('output');
  ot.value = ot.value.slice(0, -1);
};
const Dlt=()=>{
     const display = document.getElementById('output');
    display.value=eval(display.value)
    

}
const Result=()=>{
     const display = document.getElementById('output');
    try{
       ;
        display.value = eval(display.value)
        
    }
    catch(err){
     
        display.value=""
        display.placeholder="Invalid Experssion!!"
        
    }
    
}