import React,{Component} from "react";

class Child extends Component{
    state={
        balance:0,
    };
    onchildprofit=()=>{

        this.setState ({balance:this.state.balance +1})
    }

    onchildexpense=()=>{

                if (this.state.balance===0) {
                return;
             }

        this.setState ({balance:this.state.balance -1})
    }

   
    render(){
   const { name, balanceIncrement ,balanceDecrement} = this.props;
   const onProfitClick=()=>{
       console.log("from onprofitclick");
       this.onchildprofit();
       balanceIncrement();
   };
   const onExpenseClick=()=>{
    console.log("from onexpenseclick");
    this.onchildexpense();
    balanceDecrement();
};
return(
    <>
    <h1>{name} {this.state.balance}</h1>
    <button onClick={onProfitClick} >Profit</button>
    <button onClick={onExpenseClick}>Expense</button>
    </>
)

    };

};
export default Child;