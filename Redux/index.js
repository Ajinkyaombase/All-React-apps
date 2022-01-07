const redux =require("redux");
//console.log(redux);

//create base state object
const initialState={
    counter:0,
};


//create a new reducer
const reducer =(state = initialState,action)=>{
    // if (action.type === "increment"){
    //     return{
    //         counter:state.counter+1,
    //     };
    // }else if (action.type === "decrement"){
    //     return{
    //         counter:state.counter-1,
    //     };
    // }else{
    //     return state;
    // }
    const { value,type}= action;         // destructring step
    switch (type) {
        case "increment": return{
            counter:state.counter +value,
        };
        case "decrement": return{
            counter:state.counter -value,
        };
        case "multiplcation": return{
            counter:state.counter * value,
        };
         case "division": return{
            counter:state.counter / value,
        };
        default:
            return state;
    }
};


//create a new store
const store= redux.createStore(reducer);

//console.log(store);

//subscription Handler
const storeSubscriber=()=>{
    const currentState = store.getState();
    console.log(currentState);
};


//Subscribe to store
store.subscribe(storeSubscriber);


//Dispatch
store.dispatch({type:"increment",value:5});
store.dispatch({type:"decrement", value:2});
store.dispatch({type:"multiplcation", value:4});
store.dispatch({type:"division", value: 2});
