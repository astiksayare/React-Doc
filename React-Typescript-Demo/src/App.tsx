
import * as LoginModule from './components/login/index';
import React from 'react';

const App = () => {

  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  return (
    <>
      <div className='flex'><h1>Hello React</h1></div>
      <div className='main_button_container'>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Registration</button>
      </div>
     {isLogin ? <LoginModule.Login /> : <LoginModule.SignUp />}
    </>
  )
}


export default App;