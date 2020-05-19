import React, {useState} from 'react';
import {Button} from './components/Button';
import {Interface} from './module/Interface';
import JSONInput from 'react-json-editor-ajrm';
import './App.css';

export const Library = {
  button: Button,
  div: 'div'
}

interface UIComponent {
  element: string,
  content?: UIComponent[] | null | string
  properties?: object
}

export type TModel = UIComponent[];

const defaultModel: TModel = [
  {
    element: "button",
    properties: {
      title: "Hello"
    }
  },
  {
    element: "div",
    content: "Hello"
  },
  {
    element: "button",
    content: "Hello" 
  },
]

function App() {
  const [json, setJson] = useState(defaultModel);
  console.log(json);

  return (
    <div style={{display: 'flex'}}>
    <JSONInput
      height='100vh'
      width='40vh'
      placeholder={json}
      onChange={function() { setJson(arguments[0].jsObject) }}
    />
      <div>
        <Interface
          model={json}
          lib={Library}
        />
      </div>
    </div>
  );
}

export default App;
