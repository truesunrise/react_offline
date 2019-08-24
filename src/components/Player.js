import React from 'react';
import { Count } from './Count';

// 중괄호 안에 리턴문 하나 있으니까 리턴문 없앰
export const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
    </span>
    <Count score={props.score}></Count>
  </div>
)