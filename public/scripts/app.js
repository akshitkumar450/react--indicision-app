'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let count = 0;
// // after updating the count we rerender it again (only the changed part gets rendered not the whole template)

// const addOne = () => {
//     count = count + 1;
//     renderCounterApp()
// }

// const minusOne = () => {
//     count = count - 1;
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// //  it is re-rendering (only the changed part) to the DOM
// //  we have created a function to re-rendering the content after updating the count,,bcz JSX doest not do auto render 
// const renderCounterApp = () => {
//     const templatetwo = (
//         <div>
//             <h1> count : {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );
//     ReactDOM.render(templatetwo, approot);
// }

// renderCounterApp()

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    // to bind the methods
    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.reset = _this.reset.bind(_this);

        // setting up the default state object
        _this.state = {
            count: 0
        };
        return _this;
    }

    // fetching data


    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }

        // saving data

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) localStorage.setItem('count', this.state.count);
        }

        // setState is used to change the state and render new values

    }, {
        key: 'addOne',
        value: function addOne() {
            this.setState(function (prevState) {
                // prevState has the access to previous state
                return {
                    count: prevState.count + 1
                };
            });
            // this will not work
            // this.state.count += 1
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'count: ',
                    this.state.count,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { count: -10 }), document.getElementById('app'));
