//1
function greatestOfTwo(num1,num2){
  if (num1 < num2){
      return num2
  } else {
      return num1 
  }
}
// console.log(greatestOfTwo(-10,2))
//2
function greatestOfThree(num1,num2,num3){
  if (num2 < num1 && num3 < num1 ){
      return num1
  } else if (num1 < num2 && num3 < num2){
      return num2
  } else {
      return num3 
  }
}
// console.log(greatestOfThree(10,20,100))
//3
function greatestOfFour(num1,num2,num3,num4){
  if (num2 < num1 && num3 < num1 && num4 < num1){
      return num1 
  } else if (num1 < num2 && num3 < num2 && num4 < num2){
      return num2
  } else if (num1 < num3 && num2 < num3 && num4 < num3){
      return num3
  } else {
      return num4
  }
}
// console.log(greatestOfFour(10,20,300,20000))

//4
function leastOfFour(num1,num2,num3,num4){
  if (num1 < num2 && num1 < num3 && num1 < num4){
      return num1 
  } else if (num2 < num1 && num2 < num3 && num2 < num4){
      return num2
  } else if (num3 < num1 && num3 < num2 && num3 < num4){
      return num3
  } else {
      return num4
  }
}

// console.log(leastOfFour(12,112,300,40))