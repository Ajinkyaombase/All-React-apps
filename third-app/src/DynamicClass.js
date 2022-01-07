import React from "react";
import { Component } from "react";
export default class DynamicClass extends Component{
   
    state={
        isTrue: true,
        colorList:["red","green","yellow","blue","orange"],
        incrementer:0,
    };

    onClickHandler=()=>{
        this.setState({isTrue:  !this.state.isTrue})
    };

    onUpdateHandler=()=>{
        console.log("in handler");
        console.log((this.state.incrementer+1) % 5); // it will give ypu remainder
        this.setState({incrementer:(this.state.incrementer+1) % 5});
    };
    
    render(){
        return(
            <>
            <h1>In DynamicClass</h1>
            {/* <div className={this.state.isTrue?"my-true-div":"my-false-div"}>
              In div with  {this.state.isTrue?"true":"false"} Condition</div> */}
            {/* <div className={"my-false-div"}>In False</div> */}
          

            {/* <button onClick={this.onClickHandler}>Toggle</button> */}
            {/* <div style={{color:"red",backgroundColor:"yellow"}}>        //1st taken
                In dynamic style div
                </div> */}
          <div style={{ 
              backgroundColor:this.state.colorList[this.state.incrementer]}}>   
                In dynamic style div
              </div> 
                <button onClick={this.onUpdateHandler}>Update</button>
            </>
            
        )
    }
}