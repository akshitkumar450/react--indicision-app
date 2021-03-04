let count = 0;
// after updating the count we rerender it again (only the changed part gets rendered not the whole template)

const addOne = () => {
    count = count + 1;
    renderCounterApp()
}

const minusOne = () => {
    count = count - 1;
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}


//  it is re-rendering (only the changed part) to the DOM
//  we have created a function to re-rendering the content after updating the count,,bcz JSX doest not do auto render 
const renderCounterApp = () => {
    const templatetwo = (
        <div>
            <h1> count : {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    );
    ReactDOM.render(templatetwo, approot);
}

renderCounterApp()