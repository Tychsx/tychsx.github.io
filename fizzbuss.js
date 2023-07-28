function fizzbuzz(){

//This will run when we press the button
document.getElementById("myBtn").onclick = function(){

const numbers = Array.from({length:100}, (i) => i + 1);//array from 1 to 100
numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++){
    let check = numbers[i];
    let result = "";
    let result1 = "";
  
    check = document.getElementById("myInput").value  //gets the input
  
if(check < 1 || check > 100){
    result += "ENTER ONLY NUMBERS FROM 1-100"}
else if(check % 3 ===0 && check % 5 ===0 ){
    result += "FizzBuzz"
}else if (check % 3 ===0){
    result += "Fizz";
}else if(check % 5 ===0){
    result += "Buzz"
}else{
    result1 += (`The result is ${check}`);
}
document.getElementById("myPar").innerHTML = result || result1;
}

}

}
fizzbuzz();




