import React from 'react';

export default class Layout extends React.Component {
    iterateProps = (style: Object) => {
        const semanticProps = new Map<string, string>([
            ["direction", "flex-direction"],
            ["grow", "flex-grow"],
            ["wrap", "flex-wrap"]
        ]);

        const newStyle = Object.entries(style).map((e, i) => {
            if (semanticProps.has(e[0])) {
                // @ts-ignore
                e[0] = semanticProps.get(e[0])
            }
        })

        // @ts-ignore
        const CSS = newStyle.fromEntries(newStyle);

    }
    render() {
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