// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

document.write("<h1>Array Analyzer</h1>")
document.write("<h3>Now analyzing the array: " + numbers + "</h3>");
document.write("<ul>");
// Write your code here 👇

//Largest Number
let largestNumber = 0;

for (let i = 0; i < numbers.length; i++)
{
  let currentNum = numbers[i];
  if (currentNum > largestNumber)
  {
    largestNumber = currentNum;
  }

}
console.log(largestNumber);

//Smallest Number

let smallestNumber = largestNumber;

for(let i = 0; i < numbers.length; i++){
  let currentNum = numbers[i];

  if (currentNum < smallestNumber){
    smallestNumber = currentNum;
  }
}

console.log(smallestNumber);

// Sum of Array

let sumOfArray = 0;

for( let i = 0; i < numbers.length; i++){
  sumOfArray += numbers[i];
}
console.log(sumOfArray);

// Average of Array

let averageOfArray = 0;

for (let i = 0; i < numbers.length; i++ ){

  averageOfArray = sumOfArray / numbers.length;

}

console.log(averageOfArray);

// Find even numbers in array
let evenNum = [];

for ( let i = 0; i < numbers.length; i++)
{

   if (numbers[i] % 2 === 0)
   {
     let currentNum = numbers[i];
      evenNum.push(currentNum);
   }
  
}
 console.log(evenNum);

 // Find odd numbers in array
 let oddNum = [];

 for(let i = 0; i < numbers.length; i++)
 {
   if (numbers[i] % 2 !== 0)
   {
      let currentNum = numbers[i];
      oddNum.push(currentNum);
   }
 }

 console.log(oddNum);


 // Find numbers divisible by 8

 let numsDivisibleByEight = new Array;

 for (i = 0; i < numbers.length; i++){
   if(numbers[i] % 8 === 0)
   {
     let currentNum = numbers[i];
     numsDivisibleByEight.push(currentNum);
   }
 }

console.log(numsDivisibleByEight);

// Then render each li:
document.write("<li>Largest Number: " + largestNumber + "</li>");
// etc...
document.write("<li>Smallest Number: " + smallestNumber + "<li>");
document.write("Sum of all the numbers in the array: " + sumOfArray);
document.write("<li>Average: " + averageOfArray + "<li>");
document.write("Even Numbers: " + evenNum);
document.write("<li>Odd Numbers: " + oddNum + "<li>");
document.write("Numbers divisible by 8: " + numsDivisibleByEight);
document.write("</ul>");
