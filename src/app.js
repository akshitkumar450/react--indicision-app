class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision </h1>
                <h2>put your life in hand of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>what should i do?</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>here are your options</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p> addoption component here</p>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Option />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))