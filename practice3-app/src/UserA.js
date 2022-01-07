import React from "react";
import { Component } from "react";
import UserB from "./UserB";

export default class UserA extends Component{
    render(){
        return(
            <>
            <h2>From UserA</h2>
            <UserB/>
            </>
        )
    }
}