var React = require('react');
var PropTypes = React.PropTypes;
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function() {
    var { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={129} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
