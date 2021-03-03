'use strict';

//  this file will contain the JSX code

// JSX

var data = {
    title: 'indicision app',
    subtitle: 'put your life',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        data.title
    ),
    data.subtitle && data.subtitle.length > 0 && React.createElement(
        'p',
        null,
        data.subtitle
    ),
    data.options && data.options.length > 0 ? React.createElement(
        'p',
        null,
        'here are your options '
    ) : React.createElement(
        'p',
        null,
        ' no options'
    )
);
var approot = document.getElementById('app');

var count = 0;
// after updating the count we rerender it again (only the changed part gets rendered not the whole template)

var addOne = function addOne() {
    count = count + 1;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count = count - 1;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

//  it is re-rendering (only the changed part) to the DOM
//  we have created a function to re-rendering the content after updating the count,,bcz JSX doest not do auto render 
var renderCounterApp = function renderCounterApp() {
    var templatetwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' count : ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' +1 '
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' -1 '
        ),
        React.createElement(
            'button',
            { onClick: reset },
            ' reset '
        )
    );
    ReactDOM.render(templatetwo, approot);
};

renderCounterApp();
