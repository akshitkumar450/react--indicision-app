class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }

    // props can communicate in one way..i.e parent can communicate with children only
    // to do opposite(child to communicate with parent) we have passed function as a prop to child component

    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        let randomOption = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomOption])
    }

    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = '!!put your life in hand of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOption={this.state.options.length > 0}
                />
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
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
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title} </h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

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

// class Action extends React.Component {
//     render() {
//         return (
//             <div>

//                 <button
//                     disabled={!this.props.hasOption}
//                     onClick={this.props.handlePick}>
//                     what should i do?
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <p>{props.options.length}</p>

            <button onClick={props.handleDeleteOption}>remove All</button>

            {props.options.map((item) => {
                // return <p key={item}>{item}</p>
                return <Option key={item} optionText={item} />
            })}

        </div>
    )
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.options.length}</p>

//                 <button onClick={this.props.handleDeleteOption}>remove All</button>

//                 {this.props.options.map((item) => {
//                     // return <p key={item}>{item}</p>
//                     return <Option key={item} optionText={item} />
//                 })}

//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            <p>option are::: {props.optionText}</p>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>option are::: {this.props.optionText}</p>
//             </div>
//         )
//     }
// }

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
        this.setState(() => {
            return {
                error: error
            }
        })
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

//  stateless functional based components
// const User = (props) => {
//     return (
//         <div>
//             <h1>hello :{props.name}</h1>
//             <h1>age :{props.age}</h1>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))