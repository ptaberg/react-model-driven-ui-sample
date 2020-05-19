import React, { Component } from 'react';
import { TModel } from '../App';

interface TInterface {
    model: TModel,
    lib: any
}

export function Interface({model, lib}: TInterface) {
    if (typeof model !== "object") {
        return null
    }
    
    const Tree = model.map(e => {
        const {element, properties, content} = e;
        return React.createElement(lib[(element)], {
            ...properties,
        }, content)
    })

    return <div>{Tree}</div>
}