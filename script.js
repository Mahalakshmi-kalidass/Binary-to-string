const binaryText = document.getElementById("bin");
const stringText = document.getElementById("str");

//to convert binary into decimal
function binarytoString(binary){
   let dec =0;
   let str ="";
   let j= binary.length-1;
  for(let i=0;i<binary.length;i++){
    if(binary[i]!=" "){
      dec+=binary[j]*Math.pow(2,i);
    }
    j--;
  }
  str += toString(dec);
  return str;

}
//decimal into string
 function toString(decimal){
   let str = "";
   str = String.fromCodePoint(decimal);
   return str;
 }

//string to decimal
function stringToBinary(string){
  let codedbin ="";
  for(let i=0;i<string.length;i++){
    let deci = string.codePointAt(i);
    codedbin += decimalToBinary(deci)+" ";
  }
  return codedbin;
  }
//decimaltobinary
function decimalToBinary(decimal)
{
 let binary ="";
 while(decimal>0){
   let rem = decimal%2;
   decimal = parseInt(decimal/2);
   binary+=rem;
 }
  binary = reverse(binary);

 return binary
}
function reverse(binarystr){
  let revbin="";
  for(let i = binarystr.length-1;i>=0;i--){
      revbin +=binarystr[i];
  }
  return revbin;
}
 //conversion 
 function convert(ele){
   console.log("am called");   
   if(ele.id == "bin"){
     let binmessage = binaryText.value;
     let message ="";
     let eachvalue="";
     let stringMes ="";
     
   for (let i=0;i<binmessage.length;i++){
    if(binmessage[i]!=" "){
       eachvalue += binmessage[i];
    }
    else {
     stringMes = binarytoString(eachvalue);
     console.log(stringMes);
     message += stringMes ;
     eachvalue="";
     stringText.value= message; 
    }
    
    console.log(message);
  }
   }
  else if(ele.id == "str"){
    console.log("am called to bin");
   
    let stringMessage = stringText.value;
    let binMess = "";
    let eachvalue ="";
    for(let i = 0;i<stringMessage.length;i++){
      if(stringMessage[i]!=" "){
        eachvalue+=stringMessage[i];
      }
      else{
       binMess += stringToBinary(eachvalue);
       eachvalue="";
       binaryText.value = binMess;
      }
    
      console.log(binMess);
    }
  }
 
  
 }

