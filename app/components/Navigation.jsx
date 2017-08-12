var React = require('react');
var { Link, IndexLink } = require('react-router');

var PropTypes = React.PropTypes;

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink
                to="/"
                className="active-link"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Timer
              </IndexLink>
            </li>
            <li>
              <Link
                to="/"
                className="active-link"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Countdown
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Made by{'  '}
              <a href="https://github.com/Slitzerman" target="_blank">
                Niko Pinnis
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
