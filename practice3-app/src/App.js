 import logo from './logo.svg';
import './App.css';
import A from './A';
import { UserProvider } from './UserContext';
import UserA from './UserA';

function App() {
  return (
    <div>
       <h1>Hii From App</h1>
    
    <UserProvider value={ { name:"Ajinkya", id:"22",emailid:"ajinkyaombase@gmail.com",cono:8796510197}}>
      <UserA/>
    </UserProvider>
    </div>
  );
}

export default App;

