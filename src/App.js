import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Pricing from "./component/Pricing/Pricing";
import AssignmentMarks from "./component/AssignmentMarks/AssignmentMarks";
import PhoneBar from "./component/PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
