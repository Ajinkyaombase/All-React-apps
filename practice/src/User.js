import axios from "axios";
import React , {Component} from "react";

export default class User extends Component{
    state ={
        isEditMode:false,
        users:[],
        userObject:{
            id: "",
            name:" ",
            username:"",
            phone:"",
            email:" ",
            website:"",
            
        },

    };

    onDeleteClickHandler =(id) =>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response)=>{
        console.log("response");
        this.fetchData();
        alert("Deleted")
        });
    };


    onChangeHandler =(event)=>{
        const{name , value}= event.target;
        const userObjectCopy =this.state.userObject;
        userObjectCopy[name]=value;
        this.setState({userObject: userObjectCopy});
        
    }; 

    onEditClickHandler=(id)=>{
        //get the specific object by id from list
        const editObject = this.state.users.find((user)=> user.id === id);
        if(editObject){
            //set the object to state.postObject
            this.setState({userObject: editObject , isEditMode:true});
        };
    }

    resetState(){
        this.setState({
            userObject:{
                id: "",
                name:" ",
                username:"",
                phone:"",
                email:" ",
                website:"",
            },
            isEditMode:false,
        });
    }
        onCancleClickHandler=(event)=>{
            event.preventDefault();
            this.setState({
                userObject:{
                    id: "",
                    name:" ",
                    username:"",
                    phone:"",
                    email:" ",
                    website:"",
                },
                isEditMode:false,
            });
        };
    
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if (this.state.isEditMode){
            //edit 
            axios.put("https://jsonplaceholder.typicode.com/users/" +
            this.state.userObject.id,
            this.state.userObject
            ).then((response) => {
                console.log(response);
                this.fetchData();
                alert("Updated");
                this.resetState();
            });
        } 
        else{
            //save
        axios.post("https://jsonplaceholder.typicode.com/users",this.state.userObject).then
                    ((response)=>{
        console.log(response);
        this.fetchData();
        alert("Created");
        this.setState({
        userObject:{
            id: "",
            name:" ",
            username:"",
            phone:"",
            email:" ",
            website:"",
            },
        
          }) 
      })
  }}

    render(){
        return(
               <>
                 <h1> Im in User</h1>
       <form onSubmit={this.onFormSubmitClick} >
                 <label>Id</label>
       <input 
          name="id"
          value={this.state.userObject.id}
          onChange={this.onChangeHandler}
        />
              
                <label>Name</label>
      <input 
          name="name"
          value={this.state.userObject.name}
          onChange={this.onChangeHandler}
          />
       <label> UserName</label>
      <input 
          name="username"
          value={this.state.userObject.username}
          onChange={this.onChangeHandler}
          />
          <br/>
        <label> Phone No </label>
      <input 
          name="phone"
          value={this.state.userObject.phone}
          onChange={this.onChangeHandler}
          />
          
     <label>Email</label>
     <input 
       name="email"
       value={this.state.userObject.email}
       onChange={this.onChangeHandler}
     />
      <label> Website </label>
      <input 
          name="website"
          value={this.state.userObject.website}
          onChange={this.onChangeHandler}
          />
    <button type="submit" >{this.state.isEditMode ? "Update" : "Submit"}</button>

    <button onClick={this.onCancleClickHandler} >Cancle</button>
    </form>

             {this.state.users.map((user, index) =>(
                <div key ={index}>
                 <div>
                 {index+1}.{user.name}
                </div>
                <button onClick={()=>{
               this.onDeleteClickHandler(user.id);
         } }
                >Delete</button>

         <button onClick={()=>{
            this.onEditClickHandler(user.id);
        } }
           >Edit</button>
         
           <br/>
       </div>
      ))}
      </>
       );
   }
    componentDidMount(){
        this.fetchData();
        
    }

    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response.data);
            this.setState({ users: response.data });
        });
    }
}