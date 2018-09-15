var React = require('react');
var createClass = require('create-react-class');
var ReactDOM = require('react-dom');

var Title = createClass({
  render : function(){
    return (
      <h3>Title: {this.props.showTitle}</h3>
    );
  }
});

var Poster = createClass({
    render : function(){
      return (
        <img src={this.props.showPoster}
          alt="Show poster" style={{width:400, height:400}}/>
      );
    }
});


var ShowInfo = createClass({
    render : function(){
      var show = this.props.show;
      return (
        <div>
          <p>Plot: {this.props.showPlot}</p>
          <h5>IMDB Rating: {this.props.showRating}</h5>
        </div>
      );
    }
});

var Show = createClass({
    render : function(){
      var show = this.props.show;
      return (
        <div className = "text-center">
          <Title showTitle={show.title} />
          <Poster showPoster={show.poster} />
          <ShowInfo
            showPlot={show.plot}
            showRating = {show.imdbRating} />
        </div>
      )
    }
});

module.exports = Show;
