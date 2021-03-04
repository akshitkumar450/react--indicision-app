'use strict';

//  this file will contain the JSX code

// JSX

var data = {
    title: 'indicision app',
    subtitle: 'put your life',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        data.options.push(option);
        e.target.elements.option.value = "";
    }
    formRender();
};

var removeAll = function removeAll() {
    data.options = [];
    formRender();
};

var makeDecision = function makeDecision() {
    var randomText = Math.floor(Math.random() * data.options.length);
    var option = data.options[randomText];
    alert(option);
};

// const number = [1, 2, 3, 5];

//  to rerender the template after updating the array items
var formRender = function formRender() {
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
        ),
        React.createElement(
            'p',
            null,
            data.options.length
        ),
        React.createElement(
            'button',
            { disabled: data.options.length === 0, onClick: makeDecision },
            'what should i do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove all'
        ),
        React.createElement(
            'ol',
            null,
            data.options.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    'item: ',
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, approot);
};

var approot = document.getElementById('app');
formRender();
