import { useEffect, useState } from "react"
import useUserStatus from "./useUserStatus";


export default ()=>{
    const [value, setValue] = useState(0);
    const [newValue, setNewValue] = useState(0);

  const userStatus = useUserStatus(value);



    const onClickHandler=()=>{
        setValue(value + 1);
    };

    const onNewUpdateClickHandler=()=>{
        setNewValue(newValue + 1);
    };
    useEffect(()=>{
       console.log("rendered");  //execute everytime after component is rendered/updated
   });

//    useEffect(()=>{
//        console.log("rendered");
//     },[]);  // execute only once after component is renderd

       useEffect(()=>{
           console.log("Value updated");
           return()=>{
               //clean up
               console.log("clean up");
           };
       }, [value] );   //execute everytime when value will get updated

    return(
        <>
        <h1>Use Effect Example Component</h1>
        <div>Value:{value}</div>
        <div>New Value:{newValue}</div>
        <div>User Status:{userStatus}</div>
        <button onClick={onClickHandler}>Click Me</button>
        <button onClick={onNewUpdateClickHandler}>Click Me to update new value</button>
        </>
    )
}