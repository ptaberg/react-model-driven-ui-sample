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

        // React.createElement(lib[(e.element)], {
        //     title: "Hllo",
        // }, null))

export function Interface({ontology, lib}: TInterface) {
    const Tree = ontology.map(e => {
        return React.createElement(lib[(e.element)], {
            title: e.content,
        }, null)
    })

    return <div>{Tree}</div>
}