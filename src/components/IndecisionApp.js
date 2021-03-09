import React from 'react'

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './Option-modal'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOne = this.handleDeleteOne.bind(this)
        this.clearSelectedOption = this.clearSelectedOption.bind(this)
        this.state = {
            options: [],
            selectedOption: undefined
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
        const option = this.state.options[randomOption];
        this.setState(() => ({ selectedOption: option }))
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

    clearSelectedOption() {
        this.setState(() => ({
            selectedOption: undefined
        }))
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

                <OptionModal
                    clearSelectedOption={this.clearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        )
    }
}