import Login from "./Login"
import React from "react";
import { ContextProvider } from "../UserContext";

const LandingPage = () => {

  const [data, setData] = React.useState();

  return (
    <ContextProvider value={{ data, setData }}>
      <Login />
    </ContextProvider>
  )
}

export default LandingPage;