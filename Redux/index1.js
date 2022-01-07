const redux =require("redux");
//console.log(redux);

const initialState={
    counter:0,
};







const store= redux.createStore(reducer);


const storeSubscriber=()=>{
    const currentState = store.getState();
    console.log(currentState);
};


store.subscribe(storeSubscriber);




store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});