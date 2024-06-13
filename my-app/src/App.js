import logo from "./logo.svg";
import "./App.css";
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreeting from "./components/StatefullGreetings";
import StatefullGreetingWithCallback from "./components/StatefullGreetingWithCallback";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRendering from "./components/ConditionalRendering";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (
    <div className="App">
        <ConditionalRendering />
        <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;
