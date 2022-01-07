// import React, { Component } from "react";

// export default class FormComponent2 extends Component{

//     state={
//         name:"", 
//         age:0,
//         mono:0,
//         myList:[],
//     }

//     onValueChangehandler=(event)=>{
//         console.log(event.target.name);
//        this.setState({[event.target.name]: event.target.value});
//    };

//    onSubmitChangeHandler=(event)=>{
//       event.preventDefault();
//       console.log("In onSubmit");     
//       console.log(this.state);
//    }

//    onAdd=()=>{
//     const myListCopy = this.state.myList;
//     myListCopy.push(<h1>Hii i am {this.state.name},{this.state.age}years old and my mobile no is{this.state.mono}</h1>);
//     this.setState({myList:myListCopy, name:"",age:0,mono:0});
    
// };
//   render(){
//         return(
//             <>
//             <h2>Person Details</h2>
//             <form onSubmit={this.onSubmitChangeHandler}>
//             <label>Name:</label>
//             <input 
//                   name={"name"}
//                   value={this.state.name}
//                   onChange={this.onValueChangehandler}
//                   />
//             <br/>
//             <br/>
//             <label>Age:</label>
//             <input
//                    name={"age"}
//                    value={this.state.age}
//                    onChange={this.onValueChangehandler}/>
//             <br/>
//             <br/>
//             <label>Mobile No:</label>
//             <input
//                    name={"mono"}
//                    value={this.state.mono}
//                    onChange={this.onValueChangehandler}/>
//                    <br/>
//             <br/> 
//             <button type={"submit"}  onClick={this.onAdd}>Submit</button>
            
           
//             </form>
//             {this.state.myList.map((element, index)=>(
//                 <div key={index}> 
//                 {/* <h2>Inside the list item</h2> */}
//                 <div>{element}</div>
//                 </div>
//             ))}

//             </>
    
//         );
//     };
// };

/// -----------------------------Delete----------------25/11/21----------------
// import React, { Component } from "react";

// export default class FormComponent2 extends Component{

//     state={
//         name:"", 
//         age:0,
//         mono:0,
//         myList:[],
//     }

//     onValueChangehandler=(event)=>{
//         console.log(event.target.name);
//        this.setState({[event.target.name]: event.target.value});
//    };

// //    onSubmitChangeHandler=(event)=>{
// //       event.preventDefault();
// //       console.log("In onSubmit");     
// //       console.log(this.state);
// //    }

//    onFormSubmitChangeHandler=(event)=>{
//         event.preventDefault();
//         console.log("In onSubmit");     
//         console.log(this.state);
//         this.setState({
//         myList:[
//             ...this.state.myList,
//             { name:this.state.name, age: this.state.age},
//         ],
//     });
//  };


//    onAdd=()=>{
//     const myListCopy = this.state.myList;
//     myListCopy.push(<h1>Hii i am {this.state.name},{this.state.age}years old and my mobile no is{this.state.mono}</h1>);
//     this.setState({myList:myListCopy, name:"",age:0,mono:0});
    
// };

//    onDeleteByIndex=(index)=>{
//        const myListcopy=this.state.myList;
//        myListcopy.splice(index,1);
//        this.setState.name({myList: myListcopy})
//    };
//   render(){
//         return(
//             <>
//             <h2>Person Details</h2>
//             <form onSubmit={this.onFormSubmitChangeHandler}>
//             <label>Name:</label>
//             <input 
//                   name={"name"}
//                   value={this.state.name}
//                   onChange={this.onValueChangehandler}
//                   />
//             <br/>
//             <br/>
//             <label>Age:</label>
//             <input
//                    name={"age"}
//                    value={this.state.age}
//                    onChange={this.onValueChangehandler}/>
//             <br/>
//             <br/>
//             <label>Mobile No:</label>
//             <input
//                    name={"mono"}
//                    value={this.state.mono}
//                    onChange={this.onValueChangehandler}/>
//                    <br/>
//             <br/> 
//             <button type={"submit"}  onClick={this.onAdd}>Submit</button>
            
           
//             </form>
//             <br/>
//             {this.state.myList.map((person)=>(
//                 <p>
//                     Hi I am {person.name}, i am {person.age}yrs onDeleteByIndex
//                     <button onClick={this.onDeleteByIndex}>Delete</button>
//                 </p>
//             ))}
            
//             </>
    
//         );
//     };
// };

//=======------------------------
// import React, {Component} from "react";


// export default class FormComponent2 extends Component {
// state = {
// PersonList : [],
// name : "",
// age : 0,
// mobileNumber :0,
// };

// onValueChangehandler=(event)=>{
// console.log(event.target.name);
// this.setState({[event.target.name]: event.target.value});
// };

// onSubmitChangeHandler=(event)=>{
// event.preventDefault();
// console.log("In onSubmit");
// console.log(this.state);
// };

// onSubmit=()=>{
// const PersonListCopy = this.state.PersonList;
// PersonListCopy.push(
// <h3>
// Hello, My name is {this.state.name},and I'm{this.state.age} years old, Here is my Contact number{this.state.mobileNumber}
// </h3>
// );
// this.setState({PersonList:PersonListCopy, name:"",age:0,mobileNumber:0});
// };

// onDeleteByIndex = (index) => {
// const PersonListCopy = this.state.PersonList;
// PersonListCopy.splice(index,1);
// this.setState({PersonList: PersonListCopy});
// };

// render () {
// return (
// <>
// <h1>Person Form</h1>
// <form onSubmit={this.onSubmitChangeHandler}>
// <hr/>
// <label>Name</label>
// <input
// name={"name"}
// value={this.state.name}
// onChange= {this.onValueChangehandler}/>
// <br />
// <br/>

// <label>Age</label>
// <input
// name = {"age"}
// value={this.state.age}
// onChange={this.onValueChangehandler}/>
// <br />
// <br/>

// <label>mobileNumber</label>
// <input
// name = {"mobileNumber"}
// value={this.state.mobileNumber}
// onChange = {this.onValueChangehandler}></input>
// <br/>
// <br/>
// <hr/>
// <button type={"submit"} onClick={this.onSubmit}>submit</button>

// </form>
// <br/>
// {this.state.PersonList.map((element, index)=>(
//     <p key={index}>
//         Hii I am {element.name}, i am {element.age}yrs 
//         {/* { <button onClick={thius.onDeleteByIndex}>Delete</button>} */}
//         <button onClick={()=>{
//             console.log("delete clicked");
//             this.onDeleteByIndex(index);
//         }}
//         >Delete</button>
//     </p>
// ))}

// </>
// );
// }
// }

//--------------------------------------
import { Component } from "react";

export default class FormComponent2 extends Component {
state = {
         name: "",
         age: 0,
         mobile: 0,
         personList: []
      };

onValueChangehandler = (event) => {
            console.log(event.target.name);
            this.setState({ [event.target.name]: event.target.value });
  };
onSubmitHandler = (event) => {
                       event.preventDefault();
                       console.log("On Submit");
                        this.setState({
                 personList:[...this.state.personList,{name:this.state.name,age:this.state.age,mobile:this.state.mobile}]
   })
// this.onAdd();
// console.log(this.state.personList);

this.setState({name: (this.state.name = "")});
this.setState({age: (this.state.age =0)});
this.setState({mobile: (this.state.mobile =0)});
};
// onAdd = () => {
// console.log("On Add");
// const personListCopy = this.state.personList;
// console.log(personListCopy);
// personListCopy.push(this.state);
// this.setState({ personList: personListCopy });
// console.log("list updated");
// };

onDelete=(index)=>{
             const personListCopy=this.state.personList;
             personListCopy.splice(index,1);
             this.setState({personList:personListCopy});
  }

render() {
     return (
          <>
          {/* <h1>Form Component</h1> */}
         <form onSubmit={this.onSubmitHandler}>
         <label>Name :</label>
         <input
            name={"name"}
            value={this.state.name}
            onChange={this.onValueChangehandler}
         />
<br />
         <label>Age</label>
         <input
             name={"age"}
             value={this.state.age}
             onChange={this.onValueChangehandler}
          />
<br />
        <label>Mobile No :</label>
        <input
              name={"mobile"}
              value={this.state.mobile}
              onChange={this.onValueChangehandler}
          />
<br />

           <button type="submit">Submit </button>

       </form>
       {this.state.personList.map((person,index) => (
            <p key={index}>Hi I am {person.name}, i am {person.age}. Contact me on {person.mobile} <button onClick={()=>{
            this.onDelete(index);
         }}>Delete</button></p>
                  ))}
              </>
            );
       } 
}