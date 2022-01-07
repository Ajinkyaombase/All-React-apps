import React from "react";
import { Component } from "react";
import UserD from "./UserD";


export default class UserC extends Component{

    render(){
        return(
            <>
            <h2>From UserC</h2>
            <UserD/>
            </>
        )
    }
}