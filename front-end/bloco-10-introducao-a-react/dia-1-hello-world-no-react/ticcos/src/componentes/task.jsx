import React from "react";

class Task extends React.Component {
    render() {
        const titulos = ['engenheiro', 'chef de cozinha', 'desenvolvedor']
        const jsxTitulos = titulos.map((item) => <li>{item}</li>)
        return (
            <ul>{jsxTitulos}</ul>
        );
    }
}

export default Task;