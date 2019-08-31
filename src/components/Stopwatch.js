import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning: false
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <span className="stopwatch-time">5</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    );
  }

  tick = () => {
    // time update logic

  };

  // DOM이 렌더링 된 직후에 호출되는 라이프 사이클
  // 네트워크 호출
  componentDidMount() {
    // this.tick: this를 안 쓰면 window의 tick을 가리킴
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출되는 라이프 사이클
  // 리소스 해제 등등
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}