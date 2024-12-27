
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
import UseRef from "./components/hooks/use-ref-hook/UseRef";
import UseMemoHook from "./components/hooks/use-memo-hook/UseMemoHook";
import UseCallbackHook from "./components/hooks/use-callback-hook/UseCallbackHook";
import React from "react";
import { UserProvider } from "./pages/UserContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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
  // return <Navbar />

  // 6. Use-Ref-Hook
  // return <UseRef />

  // 7. Use-Memo-Hook 
  // return <UseMemoHook />
  
  // 8. Use-Callback-Hook 
  // return <UseCallbackHook />

  const [data, setData] = React.useState([]);

  return (
    <UserProvider value={{data, setData}}>
      <Login />
      <Profile />
    </UserProvider>
  )


}

export default App;