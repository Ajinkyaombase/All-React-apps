import React,{Component} from "react";
import Child from "./Child";

class Parent extends Component{

    state={
        balance:0
          } 
  balanceIncrement=()=>{
      this.setState ({balance:this.state.balance +1})
  }

  balanceDecrement=()=>{

    if (this.state.balance===0) {
        return;
    }
    this.setState ({balance:this.state.balance -1})
}

   render(){
       return(
           <>
           <h1>Parents : {this.state.balance}</h1>
           <button onClick={this.balanceIncrement}>Family Profit</button>
           <button onClick={this.balanceDecrement}>Family Expense</button>
           <Child name={"Ajinkya"} balanceIncrement={this.balanceIncrement} balanceDecrement={this.balanceDecrement}/>
           <Child name={"Ganesh"} balanceIncrement={this.balanceIncrement} balanceDecrement={this.balanceDecrement}/>
           </>
       )
   };
};
  export default Parent;