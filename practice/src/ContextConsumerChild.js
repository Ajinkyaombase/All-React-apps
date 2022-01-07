import React from "react";
import { PersonConsumer } from "./PersonContext";
import { Component } from "react";


export default class ContextConsumerChild extends Component{
    render(){
        return(
            <>
            <h1> In ContextConsumerChild</h1>
            <PersonConsumer>
                {(value)=>{
                    return(
                        <h2>The Latest value in context is name is {value.name} and age is 
                        {value.age}</h2>
                    );
                }}
            </PersonConsumer>
            </>
        );
    }
}