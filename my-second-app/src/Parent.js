import React, {Component} from "react";
import Childclass from "./Childclass";
class Parent extends Component{
    state = {
        balance : 0,
    };

    balanceIncrement = () => {
          this.setState({balance: this.state.balance + 1}
          );
         };


    balanceDecriment = () => {
        this.setState({balance: this.state.balance - 1}
        );
       };

    render(){
       
        return( 
            <>
        
          <h1> 
               Parents(All Family)  {this.state.balance}
              </h1> 
            <button onClick ={this.balanceIncrement} > 
             Family Profit
            </button>

            <button onClick ={this.balanceDecriment} > 
             Family Loss
            </button>

            <Childclass name = {"Ajinkya"}  balanceIncrement={this.balanceIncrement} balanceDecriment={this.balanceDecriment}/> 
            <Childclass name = {"Ganesh"} balanceIncrement={this.balanceIncrement} balanceDecriment={this.balanceDecriment}/> 
            
           
        </>
        );
    }
}

export default Parent;