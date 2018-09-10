var React = require('react');
var ReactDOM = require('react-dom');

//<h1>Hello World</h1>
// In react if we want to do the same thing, we first need to create a react
// element of type h1 with content 'Hello World' which will eventually spit out
// heading onto the webpage

// React.createElement(type, attrs/props, child1, child2, child3, ...);
// React.createElement(type, attrs/props, ...children);
//var App = React.createElement('h1', null, 'Hello World');
var app = <h1>Hello World</h1>
var component = function(){
  return(
    <h1>Hello World</h1>
  );
};


// We need to somehow tell react to take our React element(App) and display it
// on the webpage using DOM
//ReactDOM.render([What], [Where])

// ReactDOM.render(
//   app,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   React.createElement(Component),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Component></Component>,
//   document.getElementById('root')
// );

ReactDOM.render(
  React.createElement(component),
  document.getElementById('root')
);
