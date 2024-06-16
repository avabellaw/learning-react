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
import NestingComponents from "./components/Nesting/NestingComponents"
import MethodAsPropsParent from "./components/MethodAsProps/MethodAsPropsParent";
import RenderingLists from "./components/RenderingLists/RenderingLists";
import LifeCyclesCDM from "./components/lifecycles/LifeCyclesCDM";

function App() {
    return (
        <div className="App">
            {
                // Rendering lists
                /* <RenderingLists /> */

                // Component lifecycles
                <LifeCyclesCDM />
            }
        </div>
    );
}

export default App;
