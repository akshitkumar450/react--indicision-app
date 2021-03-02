console.log("hello");

// JSX
//  browser does not understand JSX 
// var template = <p>this is JSX from app.js</p>;

//  we have converted JSX to code that browser understands using babel
var template = React.createElement(
    "p",
    null,
    "this is JSX from app.js"
);

var approot = document.getElementById('app')
ReactDOM.render(template, approot);