import './App.css';
import ComponentFirst from "./component/1/componentFirst";
import ComponentSecond from "./component/2/componentSecond";
import Register from "./component/register/register";



function App() {
    const user = {
        name: "Anna",
        age: 19
    }
  return (
    <div className="App">
        <Register/>
      <ComponentFirst/>
      <ComponentSecond/>
    </div>
  );
}

export default App;
