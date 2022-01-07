import { createStore } from "redux";



const initialstate={
    counter:2,
}


const reducer=(state=initialstate, action)=>{
    
    const { type,value}= action;        
    switch (type) {
        case "increment": 
        return{
            counter:state.counter +value,
        };
        case "decrement": 
        return{
            counter:state.counter -value,
        };
        case "multiplication": 
        return{
            counter:state.counter *value,
        };
        case "division": 
        return{
            counter:state.counter /value,
        };
        default:
            return state;
    }
}


const store= createStore(reducer);





export default store;