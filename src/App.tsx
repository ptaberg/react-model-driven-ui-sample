import React, {useState} from 'react';
import {Button} from './components/Button';
import {Interface} from './module/Interface';
import JSONInput from 'react-json-editor-ajrm';

export const Library = {
  button: Button,
  div: 'div'
}

interface UIComponent {
  element: string,
  content?: UIComponent | null | string
  properties?: object
}

export type TOntology = UIComponent[];

const Ontology: TOntology = [
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

// @ts-ignore
function App() {
  const [json, setJson] = useState(Ontology);

  return (
    <div style={{display: 'flex'}}>
    <JSONInput
      height='100vh'
      placeholder={json}
      onChange={function() { setJson(arguments[0].jsObject) }}
    />
    <Interface
      ontology={json}
      lib={Library}
    />
    </div>
  );
}

export default App;
