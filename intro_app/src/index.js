var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

// var Component = function(props){
//   return(
//     <div style={{ color : props.color }}>
//       <h1>{props.greeting}</h1>
//     </div>
//   );
// };

// npm i -S create-react-class

var Component = createClass({
  render : function(){
      return(
        <div style={{ color : this.props.color }}>
          <h1>{this.props.greeting}</h1>
        </div>
      );
  }
});

ReactDOM.render(
  <Component greeting="Hello world" color="blue"/>,
  document.getElementById('root')
);
