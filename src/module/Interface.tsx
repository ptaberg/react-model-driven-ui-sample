import React, { Component } from 'react';
import { Button } from '../components/Button';
import { TOntology } from '../App';

// const Ontology = {
//     'RootLayout': {
//       'button': {
//         content: "Hello"
//       }
//     }
//   }

interface TInterface {
    ontology: TOntology,
    lib: any
}

export function Interface({ontology, lib}: TInterface) {
    const Tree = ontology.map(e => {
        const {element, properties, content} = e;
        return React.createElement(lib[(element)], {
            ...properties,
        }, content)
    })

    return <div>{Tree}</div>
}