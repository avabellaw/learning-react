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
import LifeCyclesCDU from "./components/lifecycles/LifeCyclesCDU";
import LifeCyclesCWU from "./components/lifecycles/LifeCyclesCWU";
import ControlledForm from "./components/forms/ControlledForm";

function App() {
    return (
        <div className="App">
            {
                // Rendering lists
                /* <RenderingLists /> */

                // Component lifecycles

                    // mount
                    /* <LifeCyclesCDM 

                    // update
                    <LifeCyclesCDU /> 

                    // Will Unmount
                    <LifeCyclesCWU />*/

                // Forms

                <ControlledForm />
            }
        </div>
    );
}

export default App;
