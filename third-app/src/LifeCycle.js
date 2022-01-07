import React, { Component } from "react";

export default class LifeCycle extends Component{
    

    constructor(){
        super();  // Internally we are invoking base class's constructor
     // First the constructor of base  class  will be invoked 
     // and then the constructor of child class will get invoked 
     console.log("In constructor");
    }


    render(){
        console.log("In render");

        return(
            <h1>In LifeCycle</h1>
        )
    }

    componentDidMount(){
        console.log("In componentDidMount");
    }
}