import logo from "./logo.svg";
import "./App.css";
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreeting from "./components/StatefullGreetings";
import StatefullGreetingWithCallback from "./components/StatefullGreetingWithCallback";

function App() {
  return (
    <div className="App">
        <StatefullGreeting greeting="I am a stateful class" name="Ma'am" />
    </div>
  );
}

export default App;
