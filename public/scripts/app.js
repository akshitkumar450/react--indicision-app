'use strict';

//  this file will contain the JSX code

// JSX

var template = React.createElement(
  'h1',
  null,
  'this is JSX from app.js saying hello'
);
var approot = document.getElementById('app');
ReactDOM.render(template, approot);
