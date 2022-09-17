// Odd numbere between 1 and 20
// For-Loop

// for(let number = 1; number <=20; number = number + 1 ){
//     if(number % 2 === 0){
//         console.log(number + '')
//     } else {
//         console.log(number + ' is an Odd Number.')
//     }
// }

//calculateAreaOfRectangle

// function areaOfRectangle(length , width){
//     const multiply = length * width
//     return multiply 
// }

// console.log(areaOfRectangle(10 , 35) + 'meters'


// alert('Hello My World!')



// const side1 = 6 
// const side2 = 10
// const side3 = 9

// if(side1==side2 && side2==side3){
//     console.log('Equilateral Triangle')
// }else if(side1===side2 || side1===side3 || side2===side3){
//     console.log('Isosceles Triangle')
// }else {
//     console.log('Scalene Triangle')
// }




//typeOfTriangle

// const side1 = 7, side2 = 7, side3 = 7

// if (side1===side2 && side2===side3){
//     console.log ('Equilateral Triangle')
// }else if (side1===side2 || side1===side3 || side2===side3){
//     console.log ('Isosceles Triangle')
// }else {
//     console.log ('Scalene Triangle')
// }


//areaOfRectangle

// function areaOfRectangle(length , width){
//     const product = length * width
//     console.log('Area of rectangle is ' + product + 'meters.')
// }

// areaOfRectangle(15 , 10)




//friendsArray

// const friends = ['Peculiar','Franky','Funmilayor','Chinwe','Prince']

// const bestFriend = friends[0]

// console.log('The name of my best friend is '+ bestFriend +'.')

// My Personal Library

// const book = {
//     title : 'HOW TO SELL ANYTHING TO ANYBODY',
//     description : 'A Marketing Guide',
//     numberOfPages : 238,
//     author : 'Joe Girald',
//     reading : true
// }

// console.log(book.reading)


// My Personal Library 2

// const book = {
//     title : 'HOW TO SELL ANYTHING TO ANYBODY',
//     description : 'A Marketing Guide',
//     numberOfPages : 238,
//     author : 'Joe Girald',
//     reading : true,
//     toggleReadingStatus : function(){
//         if(book.reading===true){
//             book.reading = 'Reading'
//         } else{
//             book.reading = 'Not Reading'
//         }
//     }
// }

// book.toggleReadingStatus()

// console.log(book.reading)


// My Personal Library 3

// const books = [
//     {
//     title : 'HOW TO SELL ANYTHING TO ANYBODY',
//     description : 'A Marketing Guide',
//     numberOfPages : 238,
//     author : 'Joe Girald',
//     reading : true
//     },
//     {
//     title : 'LEADERSHIP CAPACITY BUILDING',
//     description : 'Personal Development',
//     numberOfPages : 156,
//     author : 'Jephthah Sunday',
//     reading : false
//     },
//     {
//     title : 'HOW TO BE ASSERTIVE',
//     description : 'Personal Development',
//     numberOfPages : 212,
//     author : 'John West',
//     reading : true
//     },
//     {
//     title : 'HOW TO GROW YOUR INFLUENCE',
//     description : 'Personal Development',
//     numberOfPages : 120,
//     author : 'Chimezie Sunday',
//     reading : false
//     },
//     {
//     title : 'HOW TO COMMUNICATE EFFECTIVELY',
//     description : 'Personal Development',
//     numberOfPages : 110,
//     author : 'Peculiar Amutadi',
//     reading : true
//     },    
    
// ]

// for(let i = 0; i <5; i++){
//     if(books[i].reading === true){
//     console.log(books[i])
//     }
    
// }


// const array=[10,12,13,24,34,56,5,6,67,65]

// function sum(a,b){
//     const addition = a + b
//     console.log(addition)
// }

// sum(array[1],array[5])

// function converter(centimeter) {
//     const meter = centimeter / 100
//     return meter
// }

// const length = converter(6500)

// console.log('The length in meters is '+ length + 'm')


// //Print all even numbers from 0 - 10

// for(let i=1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(i + ' is an even number')
//     }
// }

// Print a table containing multiplication tables

// const twoxTable =prompt("Enter the desired multiplication table")
// const threexTable =prompt("Enter the desired multiplication table")


// for(let i=1; i<=12; i++){
//     const result = i * twoxTable

//     console.log(twoxTable, '*', i, '=', result)
// }4
//break
// for(let i=1; i<=12; i++){
//     const result = i * threexTable

//     console.log(threexTable, '*', i, '=', result)
// }

// let rows = prompt("Enter rows")
// let cols = prompt("Enter columns")


// createTable(rows, cols)

// function createTable(rows, cols) {
//    let output = "<table border='1' width = '500' cellpadding = '0' cellspacing = '0'>"
//    for (let i = 1; i<= rows; i++){
//         output = output  + "<tr>"
//         for (let j = 1; j<= cols; i++){
//             output = output + "<td>" + j, "*", i, "=", + i + j + "</td>"
//         }

//         output = output  + "</tr>"
//         j= 1
//    }
//    output = output  + "</table>"
//    document.getElementById("table").innerHTML = output
// }


// const myArray = [10,11,12,13,14,15,16,17,18,19,20]
// const myArray = ['joy','grace','love','peace','mercy']

// function reverseArr(input) {
//     input.reverse();
//     return input
// }

// console.log(reverseArr(myArray))

// const myArray = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// function sortArr(input) {
//     input.sort();
//     input.reverse();
//     return input
// }

// console.log(sortArr(myArray))

// const myArray = [10,11,12,13,14,15,16,40,17,18,19,20,21,22,23,30,24,25]

// function divisibleByTen(input) {
//         if(input % 10 === 0){
//           return true
//         }else{
//             return 'No Boolean Value'
//         }
// }


// console.log(divisibleByTen(100))

// function displayVowels(input) {
//   if(input === a,e,i,o,u){
//     return true
//   }else{
//       return 'No Boolean Value'
//   }
// }

// console.log(divisibleByTen(100))


// Create a function that filters out negative numbers

// let mathsAnswer = [-2,4,5,6,-7,-4,-5,7,8,9,-1]
// let result = mathsAnswer.filter(negativeFilter)

// function negativeFilter (input){
//   return input > -1
// }

// console.log(result)

// let mathsAnswer = [-2,4,5,6,-7,-4,-5,7,8,9,-1]
// mathsAnswer = mathsAnswer.filter(function (x){return x > -1})
// console.log(mathsAnswer)

// const mathsAnswer = [-2,4,5,6,-7,0,-4,-5,7,8,9,-1]


// function numberfilter(inputone){

//   const result = mathsAnswer.filter(negativeFilter)

//   function negativeFilter (input){
//     return input > -1
//   }
//   return result
// }

// console.log(numberfilter(mathsAnswer))


//A function that returns the number of vowels in a string


// const vowels = ['a','e','i','o','u']

// function vowelCount(string){
//     let count = 0

// for(let letter of string.toLowerCase()){
//     if (vowels.includes(letter)){
//       count++
//     }  
// }
//     return count
    
// }
//     console.log(vowelCount('Jephthah'))