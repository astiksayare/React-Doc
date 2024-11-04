
import { jsx, Fragment } from 'react/jsx-runtime';

const JsxCode = () => {

    return jsx(Fragment, {
        children: jsx('h1', {
            style: {
                textAlign: 'center'
            },

            children: 'Hello world!'
        })
    })
}

export default JsxCode;


// **********************************


/*

import React from 'react';

const App = () => {
  
  const [name, setName] = React.useState('Astik');

  return (
    <>
		<h1 style={{textAlign: 'center'}}>Hello! <span style={{textAlign: 'center'}}>{name}.</span></h1>
    </>
  )
}

export default App;

*/

/*

import React from 'react';
import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";

const App = () => {
  const [name, setName] = React.useState('Astik');

  return _jsx(_Fragment, {
    children: _jsxs("h1", {
        style: {
          textAlign: 'center'
        },
        children: ["Hello! ",_jsxs("span", {
          style: {
            textAlign: 'center'
          },
          children: [name, "."]
        })]
      })
    });
  };
  export default App;

*/