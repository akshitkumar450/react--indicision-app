import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

// passing JSX to component
const Layout = (props) => {
    return (
        <div>
            <h1>Header</h1>
            {props.children}
            <p>footer</p>
        </div>
    )
}

ReactDOM.render(
    <Layout>
        <div>
            <p>hello from children</p>
        </div>
    </Layout>,
    document.getElementById('app'))
// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))