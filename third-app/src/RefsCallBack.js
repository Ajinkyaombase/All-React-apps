import React from "react";
import { Component } from "react";

export default class RefsCallBack  extends Component{

    constructor(){
        super();
        this.inputRef= null;
    }

    OnClickHandler=()=>{
        console.log("In Handler");
        console.log(this.inputRef.value);
    }
    render(){
        return(
            <>
            <h1>In RefsCallBack</h1>
            <input
               type="text"
               ref={(ref)=>{
                   this.inputRef = ref;
               }}
               />
               <button onClick={this.OnClickHandler}>Click Me</button>
            </>
        )
    }
    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.focus();
    }
} 