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

var user = {
    name: "jewel",
    age: 30,
    location: "new york"
};

function getLocation(loc) {
    if (loc) {
        return React.createElement(
            'p',
            null,
            'location : ',
            loc
        );
    }
}

function isAdult(age) {
    if (age > 18) return React.createElement(
        'p',
        null,
        'age: ',
        age
    );
    return React.createElement(
        'p',
        null,
        'age is below 18'
    );
}

var templatetwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'age: ',
        user.age
    ),
    getLocation(user.location)
);

var approot = document.getElementById('app');
ReactDOM.render(template, approot);
