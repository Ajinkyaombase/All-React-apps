// import logo from './logo.svg';
// import './App.css';

import DynamicClass from "./DynamicClass";
import RefsCallBack from "./RefsCallBack";
import RefsExample from "./RefsExample";
import ResultClass from "./ResultClass";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//-------------------------------------------For  profit and loss-----------------------------

// import './App.css';
// import Parent from "./Parent"

// function App (){

//   return(
//     <>
//     <Parent/>
//     </>
//   )
// }
// export default App;

//-------------------------------------for true and false condition----------------------
// import './App.css';
// import TrueComponent from './TrueComponent';
// import FalseComponent from './FalseComponent';



// function App(){
//   const name="Ajinkya";
//   return(
//     <>
//     <h1>From App</h1>
//     {name==="Ajinkya"? <TrueComponent/>:<FalseComponent/>} 
//     {name==="Ajinkya" && <TrueComponent/>}
    
//     </>
//   )
// };
// export default App;

//----------------------------------- for show and hide--------------------------------------------
// import ConditionalComponent from './ConditionalComponent'


// function App(){
//   const name="Ajinkya";
//   return(
//     <>
//     <h1>From App</h1>
    
//     <ConditionalComponent/>
//     </>
//   )
// };
// export default App;

//-------------------------------- Array.map-----------------date 23/11/21----------

// import ListComponent2 from './ListComponent2';

// function App(){
  
//   return(
//     <>
//     <h1>From App</h1>
    
//     <ListComponent2/>
//     </>
//   )
// };
// export default App;
//-------------------------------  Form Component------ 24/11/21-----------------

// import FormComponent from './FormComponent';

// function App(){
  
//   return(
//     <>
//     <h1>From App</h1>
    
//     <FormComponent/>
//     </>
//   )
// };
// export default App;

//---------------------------------- Task------------------------------
// import FormComponent2 from './FormComponent2';

// function App(){
  
//   return(
//     <>
//     <h1>From App</h1>
    
//     <FormComponent2/>
//     </>
//   )
// };
// export default App;

//---------------------------------------------- date 25/11/21-------------------------

// import LifeCycle from './LifeCycle';
// import LifeCycleUpdate from './LifeCycleUpdate';

// function App(){
  
//   return(
//     <>
//     <h1>From App</h1>
    
//     {/* <LifeCycle/> */}
//     <LifeCycleUpdate/>
//     </>
//   )
// };
// export default App;

//----------------------------------------------- 26/11/21----------


//  function App(){
  
//    return(
//     <>
//     <h1>From App</h1>
    
//     {/* <LifeCycle/> */}
//     <RefsCallBack/>
//     </>
//   )
// };
// export default App;
//---------------------------------------------

function App(){
  const name="Ajinkya";
  return(
  <div>
    <h1 className={"my-class"}>from App</h1>
    {/* <div className={"my-div"}>I am inside my div</div> */}
    <ResultClass/>
  </div>
 )
};
export default App;