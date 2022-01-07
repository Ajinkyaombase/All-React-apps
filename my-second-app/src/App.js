// import MyFirstComponant from "./MyFirstComponant";
// import MySecondComponant from "./MySecondComponant";


// function  App(){
// const name = "Ajinkya";
// const name1 = "ganesh";
// // const age = 24   
//   return (
//     <div>
//       <h1>Hello {name  &&  name.length ? name : "world"}</h1>
//       {/* <h2>{1+2}</h2> */}
//       <MyFirstComponant name={name} age={24}>
//         <h2>Some data passed from app componant</h2>
//         </MyFirstComponant>    
//       {/* { <MySecondComponant name={name1} age={28} temp={"aajj"}/> } */}
//     </div>
//   );
// }
//  export default App;

 /*write property name and pass value to child block*/
 // name = {name}
 //  |         |
 //property    pass value
 // convert static to dyanamics


 // task=------------------------------------------------------------


// function  App(){
//   const name="Ajinkya";
 
//   return (
//     <div>
//       <h1>Hello {name  &&  name.length ? name : "world"}</h1>

//       <div> <h2> MyFirstComponant </h2></div> 
//       <MyFirstComponant ParentComponantName={"App"} ></MyFirstComponant>

//       <div> <h2> MySecondComponant </h2></div> 
//       <MySecondComponant ParentComponantName={"App"}></MySecondComponant>

//     </div>
   
//   );
// }
//  export default App;


// ----------------------------------------------------------------20/11/21  Saturday

import MyFirstClassComponent from "./MyFirstClassComponent";
import PropsValidate from "./PropsValidate";

// function App(){
//   const name = "Ajinkya";
//   return (

//     <div>
//       { <PropsValidate 
//       name ={"Ajinkya"}
//        age ={24}
//        renderable={"Some String"}
//        rollNumber={10}
//        remark={"Some Remark"}
//        myArr= {[1,2,3,4]}
//        myObject={{
//          name:"Ajinkya",
//          age:24,
//          mobile:"8796510197",
//        }}
//        >
//          <h1>Hello</h1>
//          </PropsValidate> }
//     </div>
//   );
// }
// export default App;

//calling  class componanet-----------------------------------------------------------


// function App(){
//   const name = "Ajinkya";
//   return (

//     <div>
//       <MyFirstClassComponent/>
//       </div>
//   );
// }
// export default App;


//----------------------------------------------------------------------------
// import MySecondClassComponent from "./MySecondClassComponent"

// function App(){
//   const name = "Ajinkya";
//   return (

//     <div>
//       <MySecondClassComponent name={"Ajinkya"} age ={24} account={"HDFC444"} />
//       <MySecondClassComponent name={"Ganesh"} age={22} account={"SBI1234"}/>

//       </div>
//   );
// }
// export default App;

//----------task-------------------------------------------


import Parent from "./Parent";
//import Childclass from "./Childclass";

function App(){
  const name = "Ajinkya";
  return(
    <>
    <div>
    
      <Parent/>
      
    </div>
    </>
  );
}
export default App;

