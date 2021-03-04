let btnValue = false

const change = () => {
    btnValue = !btnValue
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>visiblitiy toggle</h1>
            <button onClick={change}>{btnValue ? 'show' : 'hide'}</button>
            { btnValue && (
                <div>
                    <p>here are your details</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}

render()


