'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    //Life Cycle Methods(only access in Class based component)

    // this will run when a component has rendered to DOM


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // fetching data
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                // to do only when there is a option(eg :null)
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // do nothing
            }
        }

        // this will run  when props or state changes

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // saving data
            // only do when a new element is added or removed
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }

        // this will run when the component is removed from the DOM

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('unmounted');
        }

        // props can communicate in one way..i.e parent can communicate with children only
        // to do opposite(child to communicate with parent) we have passed function as a prop to child component

        // handleDeleteOption() {
        //     this.setState(() => {
        //         return {
        //             options: []
        //         }
        //     })
        // }

        // shorthand for returning from a arrow function

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomOption = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomOption]);
        }

        // this fn is passed to Options Component as a props and it is further passed to Option Component as a prop only

    }, {
        key: 'handleDeleteOne',
        value: function handleDeleteOne(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (item) {
                        return option !== item;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'enter valid value to add';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = '!!put your life in hand of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOption: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    handleDeleteOption: this.handleDeleteOption,
                    options: this.state.options,
                    handleDeleteOne: this.handleDeleteOne
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title,
            ' '
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// default props 
Header.defaultProps = {
    title: 'deafult prop: Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOption,
                onClick: props.handlePick },
            'what should i do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'please add an option to get started'
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption },
            'remove All'
        ),
        props.options.map(function (item) {
            // return <p key={item}>{item}</p>
            return React.createElement(Option, {
                handleDeleteOne: props.handleDeleteOne,
                key: item,
                optionText: item
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'option are::: ',
            props.optionText
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOne(props.optionText);
                } },
            'remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option_value.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option_value.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option_value' }),
                    React.createElement(
                        'button',
                        null,
                        'add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
