
                                        //  REVISION OF ES6

            // TEMPLATE LITERALS

 //  Temmplate literals are literals delimited with backtick (`) characters, 
 //  allowing for multi-line strings, string interpolation with embedded expressions,
 //   and special constructs called tagged templates.

                  // EXAMPLES OF TEMPLATE LITERALS

    // Template literals allow variables in strings:

// let a = "Apple";
// let b = "Apricot";
// console.log(`Here are the fruits name starting with A  ${a} ,  ${b}`);

//Template literals allow expressions in strings:

// let a = 2;
// let b = 3;
// console.log( `Total sum of a and b is ${(a) + (b)}`)


            //  SPREAD OPERATORS

    //  The JavaScript spread operator ( ... ) allows us to
    //   quickly copy all or part of an existing array 
    //  or object into another array or object.

    
                // EXAMPLES OF SPREAD OPERATORS AND OBJECT DESTRUCRTING :

//  let numOne = [1, 2, 3, 4];
//  let numTwo = [5, 6, 7, 8];
//  let combineNums = [...numOne, ...numTwo];
//  console.log(combineNums);

// The spread operator is often used in combination with destructuring.


//Assign the first and second items from numbers to variables and put the rest in an array:

// const numbers = [1, 2, 3, 4, 5];
// const[one, two, three, ...rest] = numbers;
// console.log(numbers);


// We can use the spread operator with the objects too;

// let studentOne = {
//     name: "Mustafa",
//     id: 2,
//     rollnum: 123,
//     school: "ABC",
//     remarks: "Sharp mind"
// };
// let updatestudentOne = {
//     name: "Mustafa",
//     id: 2,
//     rollnum: 123,
//     school: "ABC",
//     remarks: "Sharp mind"};
// let students = {...studentOne, ...studentTwo}
// console.log(students)


// We use the spread operator to combine the arrays too;

// let arrOne = [1, 2, 3, 4];
// let arrTwo = ['a','b','c','d'];
// let combinearrs = [...arrOne, ...arrTwo];
// console.log(combinearrs);


                    //  TERNARY OPERATORS

    //  The conditional (ternary) operator is the only JavaScript operator
    // that takes three operands: a condition followed by a question mark ( ? ), 
    // then an expression to execute if the condition is truthy followed by a colon ( : ),
    //  and finally the expression to execute if the condition is falsy.

                // EXAMPLES OF TERNARY OPERATORS :

    // let fruit = "Apple";
    // let result = (fruit === "Apple") ? "This is an Apple" : "This is not an Apple";
    // console.log(result);

    // let name = "Ahmed";
    // let a = (name == "Ahmed")? "Ahmed is a good boy" : "Ahmed is not available in the condition";
    // console.log(a)

    // let name1 = "Ahmed";
    // let name2 = "Ali";
    // let names = (name1 == "Ahmed" || name2 == "Ali" )? "They are very sharp minded students": "Check the condition";
    // console.log(names);

    // let name1 = "Ahmed";
    // let name2 = "Ali";
    // let names = (name1 == "Ahmed" && name2 == "Ali" )? "They are very sharp minded students": "Check the condition";
    // console.log(names);

                    //  PROMISE
  
          // A JavaScript Promise object contains both the producing code and calls to the consuming code:


                // EXAMPLES OF PROMISE'S :


        // let myPromise = new Promise(function(myResolve, myReject) {
                        
        // "Producing Code" (May take some time)
                        
            //   myResolve(); // when successful
            //   myReject();  // when error
            // });
                        
            // "Consuming Code" (Must wait for a fulfilled Promise)
                    
            // myPromise.then(
                //   function(value) { /* code if successful */ },
                //   function(error) { /* code if some error */ }
            // );


        // let promise = new Promise(function (resolve, reject) {
        //     let burger = "Available";
        //     if(burger == "Available"){
        //         resolve("Yes it was so delicious");
        //     }else{reject("I still haven't eat the burger")}
        // });
        // promise.then((resolve) => {
        //     console.log(resolve);
        // }).catch((error) => {
        //     console.log(error)
        // })

            // ARROW FUNCTIONS
    // Arrow functions were introduced in ES6.
//Arrow functions allow us to write shorter function syntax:

// SIMPLE EXAMPLE OF ARROW FUNCTIONS;

// BEFORE ARROW FUNCTION;
// hello = function() { return "Hello World";  };

// WITH ARROW FUNCTION;
// hello = () { return "Hello World";  }

// Arrow Function With Parameters:
// hello = (val) => "Hello " + val;

// Arrow Function Without Parentheses:
// hello = val => "Hello " + val;


                                    // ARRAY FUNCTIONS;


        // First is  map()

    // Definition and Usage. map() creates a new array from 
    // calling a function for every array element. map() 
    // calls a function once for each element in an array.

    // EXAMPLES OF ARRAY MAP FUNCTION;

// const players = [
//     {firstname : "Babar", lastname: "Azam", age : 25},
//     {firstname : "Virat", lastname: "Kholi", age : 30},
//     {firstname : "Shahnawaz", lastname: "Dahani", age: 20}
//   ];

//   let details = players.map( (call) => {
//     return [call.firstname, call.lastname, call.age].join(" ")
// });
// console.log(details)

 
 // Second is  forEach()

 //The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.


 // EXAMPLES OF ARRAY forEach FUNCTION;

//  let numbers = [2, 4, 6];
// numbers.forEach((number) => {
//     let multi = 20 * `${number}`
//     console.log(multi)
// });

// const employesDeatails = [
//     { name: "Mustafa Gabol", age: 20, salary: 4000, currency: "USD" },
//     { name: "Ali Ahmed", age: 35, salary: 3000, currency: "USD" },
//     { name: "Abu Raza", age: 25, salary: 3700, currency: "USD" },
//     { name: "Jason Roy", age: 30, salary: 4200, currency: "USD" }
//   ];

//   employesDeatails.forEach((staffDetail) => {
//     let sentence = `I am ${staffDetail.name} a staff of GM Solutions.`;
//     console.log(sentence);
//   });

    
        // Third is filter()

    // EXAMPLES OF ARRAY FILTERS METHODS

    // const ages = [32, 33, 16, 40];
    // const result = ages.filter((age) => {
    // return age >= 18;
    // });
    // console.log(result);

    // let ages = [31, 14, 37, 20, 45];
    // let result = ages.filter((number) => {
    //     return number >= 40
    // });
    // console.log(`${result} is greater a number from all other numbers those are written in the code`);


    // FOURTH IS FIND AND FIND INDEX OF;

    // The method find() is very similar to findIndex() .
    // The only difference is that the find method returns 
    // the element value, but the findIndex method returns the element index.

    // EXAMPLES OF FIND AND FIND INDEX OF

//     const ages = [3, 10, 18, 20];

// let result = ages.findIndex((age) => {
//     return age > 18;
// });
// console.log(`${result} This is shows us that 18 is in three index`);

// let array = [5, 12, 8, 3, 33, 44];
// let isLargeNumber = array.findIndex((age) => {
//         return age > 40;
//     })
//   console.log(`${isLargeNumber} this is also shows us in which index the greater number is`);



                    // FUNCTIONS OF ES6
            
        // THERE ARE THREE TYPES OF FUNCTIONS OF ES6
         // 1, HIGHER ORDER FUNCTIONS 
         // 2, CALLBACK FUNCTIONS  
         // 3, CLOSURES FUNCTIONS
        
         
            // HIGHER ORDER FUNCTIONS 
        
    //  In Javascript, functions can be assigned to variables 
    //  in the same way that strings or arrays can. 
    //  They can be passed into other functions as parameters or
    //   returned from them as well. A “higher-order function” is a 
    //  function that accepts functions as parameters and/or returns a function.
        

//     let interview = (name) => {
//         if(name == "Ahmed"){
//             return function(topic){
//                 console.log(`Hi ${name}. What is ${topic}? Please explain us.`);
//             }
//         }if(name == "Ali"){
//             return function(topic){
//                 console.log(`Hi ${name}. What is ${topic}? Please explain us.`);
//             }
//         }if(name == "Jhon"){
//             return function(topic){
//                 console.log(`Hi ${name}. What is ${topic}? Please explain us.`);
//             }
//         }else{
//             return function() {
//                 console.log("Welcome to interiew")
//             }
//         }
//     }
// interview("Ahemd")("UI");
// interview("Ali")("UX");
// interview("Jhon")("Full Stack Developer");

// let candidate1 = interview("Ahmed");
// candidate1("UI");
// candidate1("UX");
// candidate1("Full Stack Developer");
// candidate1("Javascript");


            // CALLBACK FUNCTIONS 

    //  A callback is a function passed as an argument to another function. 
    //  This technique allows a function to call another function. 
    //  A callback function can run after another function has finished.

//     let funB = () => {
//   console.log("Welcome to Function(A)") };
//             funB()

//     let funcA = () => {
//         setTimeout(function(){
//             console.log("Welcome to function (B)");  
//         }, 3000);
//     }
//     funcA()    

                // CLOSURE FUNCTIONS 
    
    // A closure is the combination of a function bundled 
    //together (enclosed) with references to its surrounding state (the lexical environment).
    // In other words, a closure gives you access to an outer function's scope from an inner function.

 //   let outerFunction = (a) => {
//     let b = 10;
//     let innerFunction = () => {
//         let sum = a + b;
//         console.log(`The sum of two numbers is ${sum}.`);
//     }
//     return innerFunction;
// }
// let inner = outerFunction(5);
// console.log(inner);
// inner();