//  this file will contain the JSX code

// JSX

const data = {
    title: 'indicision app',
    subtitle: 'put your life',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        data.options.push(option)
        e.target.elements.option.value = ""
    }
    formRender()
}

const removeAll = () => {
    data.options = []
    formRender()
}

// const number = [1, 2, 3, 5];

//  to rerender the template after updating the array items
const formRender = () => {
    const template = (
        <div>
            <h1>{data.title}</h1>
            {(data.subtitle && data.subtitle.length > 0) && <p>{data.subtitle}</p>}
            {(data.options && data.options.length > 0) ? <p>here are your options </p> : <p> no options</p>}
            <p>{data.options.length}</p>
            <button onClick={removeAll}>remove all</button>

            {
                // number.map((item, idx) => {
                //     return <p key={idx}>item:{item} with index={idx}</p>
                // })
            }

            <ol>
                {
                    data.options.map((item, index) => {
                        return <li key={index}>item: {item}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div >
    );
    ReactDOM.render(template, approot)
}

const approot = document.getElementById('app')
formRender()