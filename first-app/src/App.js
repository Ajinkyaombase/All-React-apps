import MyFirstComponant from "./MyFirstComponant";
import MySecondComponant from "./MySecondComponant";


function  App(){
const name = "Ajinkya";
  return (
    <div>
      <h1>Hello {name}</h1>
      <MyFirstComponant/>
      <MySecondComponant/>
    </div>
  );
}
 export default App;