import React, { Component } from 'react';

export class Button extends React.Component<{
    title: string,
}> {
    render(): JSX.Element {
        const {
            title,
        } = this.props;
        return <button>{title}</button>
    }
}