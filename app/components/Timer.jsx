var React = require('react');
var PropTypes = React.PropTypes;
const Clock = require('Clock');
const Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'paused'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      // this.setState({ count: newCount < 600 ? newCount : 600 });
      this.setState({ count: newCount });

      // if (newCount === 600) {
      //   this.setState({
      //     timerStatus: 'paused'
      //   });
      // }
    }, 1000);
  },
  handleStatusChange: function(newStatus) {
    if (newStatus === 'stopped') {
      this.setState({
        timerStatus: 'paused',
        count: 0
      });
    } else {
      this.setState({ timerStatus: newStatus });
    }
  },
  render: function() {
    var { count, timerStatus } = this.state;
    var renderControlArea = () => {
      return (
        <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}
        />
      );
    };
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
