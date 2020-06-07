//Assignment
//exercise 1
function isUpper(myChar){
    let result = false;
    
    if(myChar.charCodeAt() >= 65 && myChar.charCodeAt() <=90){
        result = true
    }
    return result;
}

//exercise 2
function isLower(myChar){
    let result = false;
    
    if(myChar.charCodeAt() >= 97 && myChar.charCodeAt() <=122){
        result = true
    }
    return result;
}

//exercise 3
//convert the character to lower case
//
function toLowerCase(myChar){
    let newChar = myChar;
    newChar = newChar.toLowerCase();
    return newChar;
}

function printArray(myArray)}{
    //use a for loop to print the array
}

//Print the array as a string
//do not change the array but print it as a string
//do not use any array methods
//exercise 4
function printArray(myArray){
    //use a for loop to print the array
    for(let x = 0; x < myArray.length; x++){
        console.log(myArray[x]);
	}
}

//assume you have a non-empty array
//of number values
//return but do not print the array
//e.g. [1,2,4,5] returns "1,2,3,4,5"
//do not use any array methods
//
function printArrayAsString(myArray){
    return myArray.toString();
}

//return the lastElement in the array
//do not use any array methods
function getLastElement(myArray){
	let arrLen = myArray.length;
	return myArray[arrLen-1];
}

//check if an array contains a value
//return true if found
//return false otherwise
//assume there is not an empty array
//assume the values are all integers
//hit use for loops
function containsValue(myArray, value){
  let valContained = false;
  for(let x = 0; x <= myArray.length; x++){
      if(myArray[x] == value){
        valContained = true;
      }
  }
return valContained
}

//copy the values from myArray 
//into the target array
//assume the target array has a legnth of
//zero
function copyArray(myArray, targetArray){  
  for(x = 0; x < myArray.length; x++){
    targetArray[x] = myArray[x]; 
  }
  return targetArray;
}

//write a loops that prints all
//the numbers from 0 to 1000
//only print the numbers divisible by 30
function div30(){
  for(let x = 0; x<=1000; x++){
    if(x%30 == 0){
      console.log(x)
    }
  }
}

//write a for loop that prints the following
//shape
//    *
//    * *
//    * * *
//    * * * * 
function wedge(){
  for(let x = 0; x<=4; x++){
    console.log("* ".repeat(x));
  }
}

//write a for loop that prints the following shape
//        *
//       ***
//      *****
//     *******
//I am sure this could have been done much simpler...
function triangle() {
  for (var x = 0; x <= 3; x++) {
    var str = '';
    for (var y = 1; y <= 3-x; y++) {
      str = str + ' ';
    }
    for (var a = 1; a <= (2*x+1); a++) {
      str = str + '*';
    }
    console.log(str);
  }
}

//BONUS points
//write a function name fuzzBizz
//for integers divisible by 3 print "fizz"
//for integers divisble by 5 print "buzz"
//for integers divisilbe by 3 and 5 and print "buzz fizz"
//only print one of the values based on the conditions
function fuzzBizz(val){
	str = "";
  if(val%15 == 0){
    str = "BuzzFizz";
    return str;
  }
  else if(val%5 == 0){
    str = "Buzz";
    return str;
  }
  else if(val%3 == 0){
    str = "Fizz";
    return str;
  }
  else{
    str = val;
    return str;
  }
}


//complete the work above and commit it to your repository

