// import React, { Component } from "react";

// export default class FormComponent extends Component{

//      state={
//          name:"",
//          age:0,
//      };

//      onNameChangehandler=(event)=>{
//         this.setState({name:event.target.value});
//     };

//     onAgeChangehandler=(event)=>{
//         this.setState({age:event.target.value});
//     };

//     onFormSubmitHandler=(event)=>{
//          event.preventDefault();          // when click on submit then page was refresh 
//          console.log("In onSubmit");      // so we use preventdefault...............
//          console.log(this.state);
         
//     }
    
//     render(){
//         return(
//             <>
//             <h1>Person Form</h1>
//             <form onSubmit={this.onFormSubmitHandler}>
//                 <label>Name:</label>
//                 <input value={this.state.name}
//                         onChange={this.onNameChangehandler}/>
//                 <br/>
//                 <br/>
//                 <label >Age:</label>
//                 <input value={this.state.age}
//                        onChange={this.onAgeChangehandler}/>
//                 <br/>
//                 <br/>
//                 <button type="submit">Submit</button>
//             </form>
//             </>
//         )
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";

export default class FormComponent extends Component{

     state={
         name:" ",
         age:0,
     };

     onValueChangehandler=(event)=>{
         console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    };

    onFormSubmitHandler=(event)=>{
         event.preventDefault();         
         console.log("In onSubmit");     
         console.log(this.state);
         
    };
    
    render(){
        return(
            <>
            <h1>Person Form</h1>
            <form onSubmit={this.onFormSubmitHandler}>
                <label>Name:</label>
                <input 
                        name={"name"}
                        value={this.state.name}
                        onChange={this.onValueChangehandler}/>
                <br/>
                <br/>
                <label >Age:</label>
                <input 
                       name={"age"}
                       value={this.state.age}
                       onChange={this.onValueChangehandler}/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}