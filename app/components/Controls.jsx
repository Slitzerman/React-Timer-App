var React = require('react');
var PropTypes = React.PropTypes;

var Controls = React.createClass({
  propTypes: {
    countdownStatus: PropTypes.string.isRequired
  },
  render: function() {
    var { countdownStatus } = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return (
      <div>
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
