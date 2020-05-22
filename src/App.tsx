import React, {useState} from 'react';
import {Interface} from './module/Interface';
import JSONInput from 'react-json-editor-ajrm';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Checkbox, Input, Radio, Switch, Table, Alert } from 'antd';

export const Library = {
  button: Button,
  radio: Radio,
  switch: Switch,
  checkbox: Checkbox,
  textForm: Input,
  table: Table,
  alert: Alert,
  image: "img",
  text: "p",
  div: 'div',
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
      type: "primary"
    },
    content: "Hello"
  },
  {
    element: "checkbox"
  },
  {
    element: "switch"
  },
  {
    element: "textForm",
    properties: {
      placeholder: "placeholder"
    },
  },
  {
    element: "table",
    properties: {
      dataSource: [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ]
    }
  },
  {
    element: 'alert',
    properties: {
      message: "Gute",
      type: "success"
    },
  },
  {
    element: "radio"
  },
  {
    element: "image",
    properties: {
      src: "https://static.tildacdn.com/tild3764-3337-4334-b163-636437656662/10.jpg"
    }
  },
  {
    element: "text",
    content: "I want to build normal and adequate full stack apps, please"
  }
]

function App() {
  const [json, setJson] = useState(defaultModel);
  console.log(json);

  return (
    <div style={{display: 'flex'}}>
    <JSONInput
      height='100%'
      width='45vh'
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
