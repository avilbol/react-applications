var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var Show = require('./Show');
var shows = require('./shows');


ReactDOM.render(
  <div>
    <Show show={shows[0]} />
    <Show show={shows[1]} />
    <Show show={shows[2]} />
  </div>,
  document.getElementById('root')
);
