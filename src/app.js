class IndecisionApp extends React.Component {

    render() {
        const title = 'Indecision'
        const subtitle = '!!put your life in hand of a computer'
        const options = ['one', 'two', 'four']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title} </h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlepick() {
        alert('picked')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlepick}>what should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    removeAll() {
        alert('removed')
    }
    render() {
        return (
            <div>
                <p>{this.props.options.length}</p>

                <button onClick={this.removeAll}>remove All</button>

                {this.props.options.map((item) => {
                    // return <p key={item}>{item}</p>
                    return <Option key={item} optionText={item} />
                })}

            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>option are::: {this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault();
        let option = e.target.elements.option_value.value.trim();
        if (option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type='text' name='option_value'></input>
                    <button>add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))