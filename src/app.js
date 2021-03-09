import React from 'react';
import ReactDOM from 'react-dom';

const temp = <p>hello</p>

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>hello from babel with react</h1>
                <p>lorem20  </p>
            </div>
        )
    }
}
ReactDOM.render(<Header />, document.getElementById('app'));