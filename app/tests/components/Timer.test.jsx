var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });
  it('Should count up once every second.', () => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    setTimeout(done => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 1010);
  });
  it('Should be paused when click on Pause', () => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.state.count = 1;
    timer.handleStatusChange('paused');
    setTimeout(done => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1010);
  });
  // it('Should resume when click Start' () => {
  //   var timer = TestUtils.renderIntoDocument(<Timer/>);
  //   timer.state.count = 1;
  // });
  it('Should clear when click on Clear', () => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.state.count = 1;
    timer.handleStatusChange('stopped');
    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('paused');
  });
});
