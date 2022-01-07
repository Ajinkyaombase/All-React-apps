import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import { Routes , Route} from 'react-router-dom';

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
///==========-------------------------------------------
import Header from './Header';
import Footer from './Footer';
//import Post from './Post';
//import Todo from './Todo';
import Navbar from './Navbar';
 import Body from './Body';
import User from './User';
import Accesibility from './Accesibility';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';
import { Suspense } from 'react';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import SampleError from './SampleError';
import FragmentSample from './FragmentSample';
//import CodeSplitting from './CodeSplitting';
const CodeSplitting = React.lazy(()=> import("./CodeSplitting"));
const Post = React.lazy(()=> import("./Post"));
const Todo = React.lazy(()=>import("./Todo"));



function App(){
  const name="Ajinkya";
  
    return(
      <div className="container-fluid">
      <>

      <Header/>
      <Navbar/>
      {/* <FragmentSample/> */}
      {/* <ErrorBoundry>
        <SampleError/>
      </ErrorBoundry> */}
      {/* <Suspense fallback={<h1>Loading.....</h1>}>
      <CodeSplitting/>
      <Routes>
        <Route path={"/post"}  element={ <Post/>}/>
        <Route path={"/todo"}  element={ <Todo/>}/>
        {/* <Route path={"/user"}  element={ <User/>}/> */}
      {/* </Routes>

      </Suspense> */} 
      
      <PersonProvider value={{ name:"Ajinkya", age:24}}>
        <ContextConsumer/>
      </PersonProvider>
      {/* <Accesibility/>  */}
      
      {/* <Body/>
      <Footer/>  */}

      </>
      </div>

    )

}
export default App;

