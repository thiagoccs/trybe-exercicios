import React from "react";

class HelloWorld extends React.Component {
    render () {
        const hello = 'Hello, World!';
        const span = <span>{hello}</span>;
        return span;
    }
}

export default HelloWorld;