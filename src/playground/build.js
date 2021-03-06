// let btnValue = false

// const change = () => {
//     btnValue = !btnValue
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>visiblitiy toggle</h1>
//             <button onClick={change}>{btnValue ? 'show' : 'hide'}</button>
//             { btnValue && (
//                 <div>
//                     <p>here are your details</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'))
// }

// render()

class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visible: false
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        return (
            <div>
                <h1>visibility toogle</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? 'hide' : 'show'}</button>
                {
                    this.state.visible && (
                        <p>here are your details</p>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))