import React from 'react';
import {Button} from './components/Button';
import {Interface} from './module/Interface';

export const Library = {
  button: Button
}

interface UIComponent {
  element: string,
  content?: UIComponent | null | string
  properties?: Array<string>
}

export type TOntology = UIComponent[];

const Ontology: TOntology = [
    {
      element: "button",
      content: "Say my name"
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
