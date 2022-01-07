// console.log("Hellow from file")

                   //var and let                              Date - 14/11/21
//-----------------------------------------------------------
console.log(a);
//var a;
var a=10;   
//let b;       //Error
let b=20;      //Error
console.log(b);
{
  var c=10;
  console.log(c);
  let d=20;
  console.log(d);
}
console.log(c);
console.log(d);

                    //constant
//------------------------------------------------------------------------------
// const myArr= {
// //5000    location point
// name:"Ajinkya",
// };

// // myArr=5000
// myArr.name="Akshay";
// //myArr ={               //Error
//     //  name ="Ankit",
// //};
// console.log(myArr);

                     //String 
//-----------------------------------------------------------------------------
// let myString1 = "abcd@xyz.com";
// let myString2 = "Abcd@xyz.com";

// console.log(myString1.toUpperCase()===myString2.toUpperCase())
// //true

// for (let i = 0; i < myString1.length; i++) {

//     console.log(myString1[i]);         //shows output letter in small letter line by line
// }
// //wap to find repeated character from string
// //input ="abcdafgdbjcj";
// //output="abcdj"

// let input="abcdefgabcd";
// let output="";

// for (let i = 0; i < input.length; i++) {
//     let count= 0;

//     for (let j = 0; j < input.length; j++) {
//        if (input[i] === input[j]) {
//            if(i<j){
//                break;}
//            count++;
//            if(count>1){
//           output= output + input[i];
//           break;
//        }}}}
//         console.log(output);

                      // Array
 //------------------------------------------------------------
 //let myArr=[1,2,3,4,5,"my String",["a","v"]];
//  let myArr=[1,2,3,4,5] ;
//  let myArr1=[1,2,3,4,5];
//  let isSame=true;
//  for(let i=0;i<myArr.length; i++){
//      if (myArr[i]!==myArr1[i]){
//          isSame=false;
//          break;
//      }
//  }                
// //consol.log(myArr===myArr1);     //false
// console.log(isSame);     //true

//statement 
//input="india is my country "
// output = wec make reverse string
//  input="India Is My Country";
//  output=" ";

//  function reverseString(value){
//      let returnValue="";
//      for (let i = value.length -1; i >-1; i--) {
//          returnValue= returnValue + value[i];  
//      }
//      return returnValue;
//  }


// let wordString=" ";
// for (let i = 0; i < input.length; i++) {
//     if (input[i]===" ") {
//         output = output + reverseString(wordString)+ " ";
//         console.log(wordString);
//         wordString="";
//         continue;
//     } 
//     else{
//         wordString = wordString + input[i];
//         if (i+1===input.length) {
//             output = output+ reverseString(wordString);
//             console.log(wordString);
//             wordString="";
//         }
//     }
// }
// console.log(output);


                       //Function                             Date - 16/11/21
//----------------------------------------------------------------------------------------
               // Normal function
 
//  console.log(addNumbers(10,20));      // we get the result 30
//  console.log(addNumbers);             // we will get the function definition

//  function addNumbers(number1,number2){
//      return number1 + number2;
//  }



//                //Function expression
// const addNumbers2 = function (number1,number2){
//     return number1 + number2 ;
// };
//console.log(addNumbers2(10,20));     // we get the result 30
// console.log(addNumbers2);            //// we will get the function definition

//                //Arrow Functions
// const addNumbersArrow =(number1,number2) => {
//     return number1 + number2;
// };

// console.log(addNumbersArrow(10,20)); // we get the result 30
// console.log(addNumbersArrow);        // we will get the function definition

                      //This
// const myObject = {        //1000 loc
//     name: "Akshay",
//     getName: function (){
//         return this.name;
//     },
// };

// const myNewObject = {     //2000 loc
//     name :"ankit",
// };

// //myObject.getName-> 1000
// //newGetName-> 2000
// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());  //akshay
// console.log(newGetName());        //ankit


                           //Constructor function

// function Person(name, age){
//     //check if called with new keyword
//     if(!new.target){
//         return new Person(name,age);
//     }
//     //this ={}  //added internally
//     this.name = name;
//     //this.number=1234;
//     this.age= age ;
//     //return {name};  //return {name: name}
//     //return 1234; // not allwed
//     //return [1,2,3,4]; // not allowed
//     //return this; //added internally
// }
// const personObject = new Person("Ajinkya",26);
// const personObject1 =Person("Ajinkya",26); //same op as above
// console.log(personObject);
// console.log(personObject1);

                                //Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important    // in array
// console.log(a, b, c, d);
// const myObject = {
//   name: "Ankur",
//   age: 29,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important      //in object
// console.log(name, age);


//----------------------------------------------------------------------        Date 17/11/21

                    //spread operator
// const myArr =[1,2,3,4,5];     //1000 loc
// const myArrNew = [];          //2000 loc //old way
// //...cost myArrNew =[...myArr];  //2000 loc
// for (let i = 0; i < myArr.length; i++) {
//     myArrNew.push(myArr[i]);
    
// }
// console.log(...myArr);  //Same as writing console.log(1,2,3,4,5); // New way
// console.log(myArr);
// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);


//  const myObject = {
//      name : "Ankur",
//      age : 29,
//  };

// const myNewObject = {...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name = "Ankit";
// console.log(myObject);
// console.log(myNewObject);
// // console.log(...myObject); // not valid


                              //Rest  parameter
// function addNumbers(...args){
//     // const args =[10,20,30,40]; //Internally
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i]; //same as result = result + args[i]
        
//     }
//     return result;
// }

// console.log(addNumbers(10,20,30,40));






























































