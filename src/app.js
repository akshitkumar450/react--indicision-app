//  this file will contain the JSX code

// JSX

var data = {
    title: 'indicision app',
    subtitle: 'put your life',
    options: ['one', 'two']
}

var template = (
    <div>
        <h1>{data.title}</h1>
        {(data.subtitle && data.subtitle.length > 0) && <p>{data.subtitle}</p>}
        {(data.options && data.options.length > 0) ? <p>here are your options </p> : <p> no options</p>}
    </div>
);

var user = {
    name: "jewel",
    age: 30,
    location: "new york"
}

function getLocation(loc) {
    if (loc) {
        return <p>location : {loc}</p>;
    }
}

function isAdult(age) {
    if (age > 18) return <p>age: {age}</p>
    return <p>age is below 18</p>
}

var templatetwo = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        { (user.age && user.age >= 18) && <p>age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var approot = document.getElementById('app')
ReactDOM.render(template, approot);