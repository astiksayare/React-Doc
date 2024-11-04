
import "./App.css";
import ConditionalRendering from "./components/conditional-rendering/ConditionalRendering";
import Event from "./components/events/Event";
import JsxCode from "./components/Jsx code/JsxCode";
import List from "./components/list-component/List";
import Render from "./components/multiple-component/Render";
import UserProps from "./components/props/Props";
import UseStateHook from "./components/hooks/use-state-hook/UseStateHook";
import UseEffectHook from "./components/hooks/use-effect-hook/UseEffectHook";
import UseContextHook from "./components/hooks/context-hook/UseContextHook";
import UseCustomHook from "./components/custom-hook/UseCustomHook";
import Navbar from "./components/router/navbar/Navbar";

const App = () => {

  // return <Render/>
  // return <JsxCode />
  // return <List />
  // return <UserProps />
  // return <ConditionalRendering isValid={false}/>
  // return <Event />

  // Hooks in React
  // 1. Use State Hooke
  // return <UseStateHook />

  // 2. Use Effect Hook 
  // return <UseEffectHook />

  // 3. Create Context and Use Context Hook
  // return <UseContextHook/>

  // 4. Use-Custom Hook
  // return <UseCustomHook  />

  // 5. Router 
  return <Navbar />
}

export default App;