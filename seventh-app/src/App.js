import logo from "./logo.svg";
// import "./App.css";
// import "./style.scss";
import Person from "./Person";
import Course from "./Course";
import ClassComponentConversion from "./ClassComponentConversion";
import FunctionComponent from "./FunctionComponent";
import OnlineOrders from "./OnlineOrders";
import OfflineOrders from "./OfflineOrders";
import OnlineOrder2 from "./OnlineOrder2";
import OnlineOrderChild from "./OnlineOrderChild";
import UseEffectExample from "./UseEffectExample";
import HooksSample from "./HooksSample";
import RefParent from "./RefParent";
import PortalDemo from "./PortalDemo";
import ProfileDemo from "./ProfileDemo";
import HooksSampleUser from "./HooksSampleUser";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import NewDecrement from "./NewDecrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";
import Sassdemo from "./Sassdemo";
import RadiumDemo from "./RadiumDemo";
import TestComponent from "./TestComponent";
import JqueryDemo from "./JqueryDemo";

function App() {
  return (
    <div className="App">
      <h1>From app</h1>
      {/* <JqueryDemo /> */}
      {/* <TestComponent name={"Ajinkya"} /> */}
      {/* <RadiumDemo /> */}
      {/* <Sassdemo /> */}
      {/* <Person/>
      <Course/> */}
      <Person />
      {/* <ClassComponentConversion/>*/}
      {/* <FunctionComponent/> */}
      {/* <OnlineOrders/>
      <OfflineOrders/> */}
      {/* <OnlineOrder2/>
      <OnlineOrderChild/> */}
      {/* <UseEffectExample/> */}
      {/* <HooksSample/> */}
      {/* <HooksSampleUser/> */}
      {/* <RefParent/> */}
      {/* I am inside App component
      <PortalDemo/> */}
      {/* <ProfileDemo/> */}

      {/* <Incrementer
     render={(value,onClickHandler)=>{
       return<NewIncrement value={value} onClickHandler={onClickHandler}/>
       }}/>
       <Decrementer
       render={(value, onClickHandler)=>{
         return<NewDecrement value={value} onClickHandler={onClickHandler}/>
       }}/> */}
      {/* <DemoComponent/> */}
      {/* <Reconciliation /> */}
    </div>
  );
}

export default App;
