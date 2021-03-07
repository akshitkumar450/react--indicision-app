// let count = 0;
// // after updating the count we rerender it again (only the changed part gets rendered not the whole template)

// const addOne = () => {
//     count = count + 1;
//     renderCounterApp()
// }

// const minusOne = () => {
//     count = count - 1;
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// //  it is re-rendering (only the changed part) to the DOM
// //  we have created a function to re-rendering the content after updating the count,,bcz JSX doest not do auto render 
// const renderCounterApp = () => {
//     const templatetwo = (
//         <div>
//             <h1> count : {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );
//     ReactDOM.render(templatetwo, approot);
// }

// renderCounterApp()

class Counter extends React.Component {

    // to bind the methods
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)

        // setting up the default state object
        this.state = {
            count: 0
        }
    }

    // fetching data
    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'), 10)
        if (!isNaN(count)) {
            this.setState(() => ({ count: count }))
        }
    }

    // saving data
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count)
            localStorage.setItem('count', this.state.count)
    }

    // setState is used to change the state and render new values

    addOne() {
        this.setState((prevState) => {
            // prevState has the access to previous state
            return {
                count: prevState.count + 1
            }
        })
        // this will not work
        // this.state.count += 1
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'))