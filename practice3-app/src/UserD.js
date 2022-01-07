import React from "react";
import { Component } from "react";
import { UserConsumer } from "./UserContext";



export default class UserD extends Component{

    render(){
        return(
            <>
            <UserConsumer>
                {(value)=>{
                    return(
                        <>
                        <h2>From UserD</h2>
                        <h1>I am User {value.name} and my company id is {value.id}. 
                        My Email id is {value.emailid} and Contact no {value.cono}</h1>
                        </>
                    )
                }}
            </UserConsumer>
            </>
        )
    }
}