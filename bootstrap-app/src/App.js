 import logo from './logo.svg';
import './App.css';

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
//----------------------------------------------------------
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { Route, Routes } from 'react-router-dom';
import Post from './Post';
import Todo from './Todo';



function App(){
    const name="Ajinkya";
    return(
    <div>
        <Header/>
      <Navbar/>
      <Routes>
        <Route path={"/post"} element={<Post/>}/>
        <Route path={"/todo"} element={<Todo/>}/>
        
      </Routes>
      
      
      
    </div>
   )
  };
  export default App;