import React, {Component} from "react";
class Childclass extends Component{

    render(){
        const {name , balanceIncrement ,balanceDecriment  } = this.props;
        return( 
            <>
        
          <h1> 
                From {name}
          </h1> 
            <button onClick ={balanceIncrement} >
             Profit
            </button>
            
            <button onClick ={balanceDecriment} >
             Loss
            </button>
        
        </>
        );
    }
}

export default Childclass;