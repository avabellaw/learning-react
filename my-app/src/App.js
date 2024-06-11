import logo from "./logo.svg";
import "./App.css";
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreeting from "./components/StatefullGreetings";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32" />
      <StatefullGreeting greeting="I am a stateful class" name="Ma'am" />
    </div>
  );
}

export default App;
