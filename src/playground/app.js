class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOne = this.handleDeleteOne.bind(this)
        this.state = {
            options: []
        }
    }

    //Life Cycle Methods(only access in Class based component)

    // this will run when a component has rendered to DOM
    componentDidMount() {
        // fetching data
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            // to do only when there is a option(eg :null)
            if (options) {
                this.setState(() => ({ options: options }))
            }
        }
        catch (e) {
            // do nothing
        }
    }

    // this will run  when props or state changes
    componentDidUpdate(prevProps, prevState) {
        // saving data
        // only do when a new element is added or removed
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    // this will run when the component is removed from the DOM
    componentWillUnmount() {
        console.log('unmounted');
    }

    // props can communicate in one way..i.e parent can communicate with children only
    // to do opposite(child to communicate with parent) we have passed function as a prop to child component

    // handleDeleteOption() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }

    // shorthand for returning from a arrow function
    handleDeleteOption() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        let randomOption = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomOption])
    }

    // this fn is passed to Options Component as a props and it is further passed to Option Component as a prop only
    handleDeleteOne(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => option !== item)
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render() {
        const subtitle = '!!put your life in hand of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOption={this.state.options.length > 0}
                />
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    handleDeleteOne={this.handleDeleteOne}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title} </h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

// default props 
Header.defaultProps = {
    title: 'deafult prop: Indecision'
};


const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOption}
                onClick={props.handlePick}>
                what should i do?
                </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>please add an option to get started</p>}

            <button onClick={props.handleDeleteOption}>remove All</button>

            {props.options.map((item) => {
                // return <p key={item}>{item}</p>
                return <Option
                    handleDeleteOne={props.handleDeleteOne}
                    key={item}
                    optionText={item}
                />
            })}

        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <p>option are::: {props.optionText}</p>
            <button
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText)
                }}>
                remove
            </button>
        </div>
    )
}
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option_value.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error: error }))

        if (!error) {
            e.target.elements.option_value.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option_value'></input>
                    <button>add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))