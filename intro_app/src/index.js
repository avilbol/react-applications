var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var Show = require('./Show');
var shows = require('./shows');


ReactDOM.render(
  <div>
    <Show shows={shows} showIndex={2} />
  </div>,
  document.getElementById('root')
);
