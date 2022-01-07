import { Component } from "react";
import { connect } from "react-redux";
import React from "react";




class Counter extends Component{

    state={

        inputvalue:0,
    }
    onChangeHandler=(event)=>{
       this.setState({inputvalue:event.target.value})
    }


    render(){
        console.log(this.props);
        return(
            <>
            <h1>Counter:{this.props.counter}</h1>
            <input 
              value={this.state.inputvalue}
              onChange={this.onChangeHandler} />
              <br/>
            <button onClick={()=>{
                this.props.increment(parseInt(this.state.inputvalue))
            }}>Increment</button>
            <button onClick={()=>{
                this.props.decrement(parseInt(this.state.inputvalue))
            }}>Decrement</button>
            <button onClick={this.props.multiplication}>Multiplication</button>
            <button onClick={this.props.division}>Division</button>
            
            </>
        )
    }
}

const mapStateToProps=(state)=>{
     return{
         counter:state.counter,
     }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      increment:(value)=>dispatch({ type:"increment",value:value}),
      decrement:(value)=>dispatch({ type:"decrement",value:value}), 
      multiplication:()=>dispatch({type:"multiplication"}),
      division:()=>dispatch({type:"division"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);