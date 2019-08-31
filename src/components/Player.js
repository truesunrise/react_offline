import React from 'react';
import { Count } from './Count';

export class Player extends React.Component {
  render() {
    console.log(this.props.name, 'rendered');

    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> x </button>
      {this.props.name}
    </span>
        <Count
          score={this.props.score}
          id={this.props.id}
          changeScore={this.props.changeScore}></Count>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    // sore가 다를 경우만 true return
    return this.props.score !== nextProps.score
    // false: update 하지말라
    //return true;
  }
}

// 중괄호 안에 리턴문 하나 있으니까 리턴문 없앰
/*
export const Player = (props) => {
  console.log(props.name, 'rendered');

  return (
    <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
    </span>
      <Count
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}></Count>
    </div>
  )
}*/
