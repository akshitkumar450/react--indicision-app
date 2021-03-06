import React from 'react'

export default class AddOption extends React.Component {
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
                {this.state.error && <p className="widget-message">{this.state.error}</p>}
                <form className="widget-form" onSubmit={this.handleAddOption}>
                    <input type='text' name='option_value'></input>
                    <button className="btn">add option</button>
                </form>
            </div>
        )
    }
}

