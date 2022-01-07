import React ,{Component} from "react";


export default class Accesibility extends Component{

    onButtonClickHandler=()=>{
        console.log("Button clicked");
    }
    render(){
        return(
            <>
            <h1>I am inside Accesibility</h1>
            <br/>
            <label htmlFor="name">Name</label>
            <br/>
            <input
              id="name"
              name={"name"}
              placeholder="Please enter your name"
              aria-label="name"
              aria-required="true"
           />   
           <br/>
           <button onClick={this.onButtonClickHandler}>Click Me</button>  
           <br/>
           <table>
               <tbody>
                   <tr>
                       <td>Ajinkya</td>
                       <td>Akshay</td>
                   </tr>
               </tbody>
            </table>      
            </>
        );
    }
}
//symentic html