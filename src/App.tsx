import React from 'react';
import {Button} from './components/Button';
import {Interface} from './module/Interface';

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
  return (
    <Interface
      ontology={Ontology}
      lib={Library}
    />
  );
}

export default App;
