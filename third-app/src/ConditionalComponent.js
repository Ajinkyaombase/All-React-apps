import { Component } from "react"

class ConditionalComponent extends Component{

   state={
       showtext :true,
   }
   onToggleShowtext=()=>{
       this.setState({showtext: !this.state.showtext})
   }
  render(){

      return(
          <>
        { this.state.showtext && <h1>From ConditionalComponent</h1>}
        <button onClick={this.onToggleShowtext} > {this.state.showtext? "Hide":"Show"} </button>
        </>
      );
  }
   

};
export default ConditionalComponent;