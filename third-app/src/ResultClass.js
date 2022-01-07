import React from "react";
import { Component } from "react";


// export default class ResultClass extends Component{

//     state={
//         marks:0,
//         colorList:["red","green","yellow","blue","orange"],
//         myList:[],
//     }

//     onClickHandler=()=>{

//     }
//    checkMarks=()=>{
//        if (marks>35) {
//            this.
//        }
//    }
//    onAdd=()=>{
//            const myListCopy = this.state.myList;
//            myListCopy.push(this.state.marks);
//            this.setState({myList:myListCopy, marks:0});
// };
//     onValueChangehandler=(event)=>{
//                console.log(event.target.name);
//                this.setState({[event.target.name]: event.target.value});
        
//            };

//     render(){
//         return(
//             <>
//             <h1>Insert your marks and check status</h1>
//             <input 
//                  name={marks}
//                  value={this.state.marks}
//                  onChange={this.onValueChangehandler} />

//             <button onClick={ this.onClickHandler} onClick={this.onAdd}>show result</button>
//             </>
//         )
//     }
// }

//===================================
// export default class ResultClass extends Component{

//     state={
//         percentage:0,
//         result:"Invalid",
      
//     }
//     onCalculatorHandler=(event)=>{
//         console.log("In Handler");
//         this.setState({percentage:event.target.value})
//     };
//     onClickHandler=()=>{
//         this.setState({result:this.calculateResult(this.state.percentage)})
//     }
   

    
//     calculateResult=(percentage)=>{
//         let result="Invalid";
//          if (percentage>=0 && percentage<35) {
//             //  return "Fail";

//          }
//          else if (percentage>=35 && percentage<=50) {
//              return "just Pass";
//          }else if (percentage>50 &&  percentage<=60) {
//              return "Second class";
//          }else if (percentage>60 && percentage<=70) {
//              return "First class";
//          }else if (percentage>70 && percentage<=100) {
//              return "Destinction";
//          } return result;
//     };
   
//     render(){
//         return(
//             <>
//             <h2>Result calculator</h2>
//             <input  value={this.state.percentage}
//                     onChange={this.onCalculatorHandler}/>
//             <button onClick={this.onClickHandler}>Result</button>
//             <div>Your result : {this.state.result}</div>
//             </>
//         )
//     }
// }

//---------------------------------------for color
export default class ResultClass extends Component{

    state={
        percentage:0,
        result:"Invalid",
        color:"white",
      
    }
    onCalculatorHandler=(event)=>{
        console.log("In Handler");
        this.setState({percentage:event.target.value})
    };
    onClickHandler=()=>{
       const{ result, color}=this.calculateResult(this.state.percentage);
       // this.setState({result:result,color:color})
       this.setState({result, color});  // same as above statements
    };

    
    calculateResult=(percentage)=>{
       // let result="Invalid";

       let resultObject={
           result:"Invalid",
           color:"white",
       };
         if (percentage>=0 && percentage<35) {
            //  return "Fail";
            resultObject ={
                result:"Fail",
                color:"red"
            }
         }
         else if (percentage>=35 && percentage<=50) {
            //  return "just Pass";
            resultObject ={
                result:"jist pass",
                color:"orange"
            }
         }else if (percentage>50 &&  percentage<=60) {
            //  return "Second class";
            resultObject ={
                result:"Second class",
                color:"yellow"
            }
         }else if (percentage>60 && percentage<=70) {
            //  return "First class";
            resultObject ={
                result:"First class",
                color:"green"
            }
         }else if (percentage>70 && percentage<=100) {
            //  return "Destinction";
            resultObject ={
                result:"Destinction",
                color:"violet"
            }
         } return resultObject;
    };
   
    render(){
        return(
            <>
            <h2>Result calculator</h2>
            <input  value={this.state.percentage}
                    onChange={this.onCalculatorHandler}/>
            <button onClick={this.onClickHandler}>Result</button>
            <div style={{backgroundColor:this.state.color}}
            >Your result : {this.state.result}</div>
            </>
        )
    }
}