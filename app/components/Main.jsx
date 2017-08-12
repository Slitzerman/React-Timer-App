var React = require('react');
const Navigation = require('Navigation');

var Main = props => {
  return (
    <div>
      <div>
        <div>
          <Navigation className="row" />
          <p>Timer component</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
