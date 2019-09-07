import React from 'react';
import Count from './Count';
import PropTypes from 'prop-types';

export class Player extends React.Component {
  // 인스턴스마다 모두 동일한 속성을 이용해야할 때, static 키워드 이용
  static propTypes = {
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string,
    score: PropTypes.number,
    changeScore: PropTypes.func
  }

  render() {
    console.log(this.props.name, 'rendered');

    const {removePlayer, id, name, score, changeScore} = this.props;

    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}> x </button>
        {name}
      </span>
      <Count
        score={score}
        id={id}
        changeScore={changeScore}></Count>
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
