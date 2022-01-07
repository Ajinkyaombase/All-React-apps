import { useEffect } from "react";



export  default (value) =>{
    //useEffect
    useEffect(() =>{
        console.log(value);
    //API call to log at server side
    },[value]);
   
};