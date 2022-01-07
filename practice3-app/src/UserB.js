import React from "react";
import { Component } from "react";
import UserC from "./UserC";


export default class UserB extends Component{

    render(){
        return(
            <>
            <h2>From UserB</h2>
            <UserC/>
            </>
        )
    }
}