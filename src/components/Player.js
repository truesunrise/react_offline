import React from 'react';
import Count from './Count';
import PropTypes from 'prop-types';
import {changeScore, removePlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/Scoreboard.module.css';   // 모듈 방식으로 적용

class Player extends React.PureComponent {
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
      <div className={styles.player}>
      <span className={styles.playerName}>
        <button className={styles.removePlayer} onClick={() => removePlayer(id)}> x </button>
        {this.props.children}
        {name}
      </span>
      <Count
        score={score}
        id={id}
        ></Count>
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(nextProps);
  //   // sore가 다를 경우만 true return
  //   return this.props.score !== nextProps.score
  //   // false: update 하지말라
  //   //return true;
  // }
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

const mapActionToProps = (dispatch) => ({   // 부모의 state
  removePlayer: (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player);