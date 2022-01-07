// import React, {Component } from "react";

// class MyFirstClassComponent  extends Component{

//   //render is used for return to webbrowser and it is methode
//     render(){
//         return <h1>Hello from the MyFirstClassComponent</h1>;
//     }
// }

// export default MyFirstClassComponent;


/// -----------------------------------------------------------------------------------------

import React, {Component } from "react";

class MyFirstClassComponent  extends Component{

  //render is used for return to webbrowser and it is methode
    render(){
        const { name,age} = this.props;
        return (<h1>Hello from the MyFirstClassComponent {name} {age}</h1>
        );
    }
}

export default MyFirstClassComponent;