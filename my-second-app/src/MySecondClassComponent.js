// import React, {Component } from "react";

// class MySecondClassComponent  extends Component{
    
//     state ={
//         balance:0,
//     };
//     balanceIncrement =(value) =>{
//         this.setState({
//             balance: this.state.balance + value
//         });
//     };
//     // onClickHandler =() =>{
//     //     console.log("I am clicked now");
//     // };

//     onProfitClickHandler =() => {
//         console.log("I am Clicked now");
//         this.balanceIncrement(1);

//         // this.setState({
//         //     balance: this.state.balance +1,
//         // });
//         // Internally
//         // this.state = { ...this.state, balance: this.state.balance +1};
//     };

//     onDoubleClickHandler =() => {
//          console.log("I am Clicked now");
//         this.balanceIncrement(100);

//         // this.setState({
//         //     balance: this.state.balance +1,
//         // });
//         // Internally
//         // this.state = { ...this.state, balance: this.state.balance +1};
//     };

  
//     render(){
//         const { name,age,account} = this.props;
//         return (
//         <>
//         <h1> Hello I am  {name},{age} years old and my balance is {""}{this.state.balance} in {account}
//                 </h1>
//         <button onClick={this.onProfitClickHandler}>Profit</button>
//         <button onClick={this.onDoubleClickHandler}>Double Profit</button>
//         </>
//         );
//     }
// };

// export default MySecondClassComponent;

// ///-------------------------------------------------------------

// import React, {Component } from "react";

// class MySecondClassComponent  extends Component{
    
//     state ={
//                  balance:0,
//              };

//     render(){
//         const { name,age,account} = this.props;
//         return (
//         <>
//         <h1>In Parents </h1>
//         <button onClick={this.onProfitClickHandler} >Total profit</button>
        
//         <button onClick={this.onProfitClickHandler}>Profit</button>
//         {/* <button onClick={this.onDoubleClickHandler}> Profit</button> */}
//         </>
//         );
//     }
// }
// export default MySecondClassComponent;