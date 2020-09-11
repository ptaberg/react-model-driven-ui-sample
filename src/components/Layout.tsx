import React from 'react';

export default class Layout extends React.Component {
    createObjectFromMap = () => {

    }

    iterateProps = (style: Object) => {
        const semanticProps = {
            "direction": "flex-direction",
            "grow": "flex-grow",
            "wrap": "flex-wrap"
        };
          
        const renameKeys = (keysMap: object, obj: object) =>
            Object.keys(obj).reduce(
              (acc, key) => ({
                ...acc,
                // @ts-ignore
                ...{ [keysMap[key] || key]: obj[key] }
              }),
            {}
        );

        return renameKeys(semanticProps, style);
    }

    render() {
        const CSS = this.iterateProps(this.props);
        console.log(CSS);
        return (
            <div style={{
                display: 'flex',
                ...CSS
            }}>
                {this.props.children}
            </div>
        )
    }
}