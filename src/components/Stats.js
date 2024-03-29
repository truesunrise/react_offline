import React from 'react';

import styles from '../pages/Scoreboard.module.css';   // 모듈 방식으로 적용

export const Stats = ({players}) => {
  // todo: 로직구현
  const totalPlayers = players.length; //props.players로 로직 구현;
  let totalScore = 0; //props.players로 로직 구현;
  players.forEach(player => totalScore += player.score);
  return (
    <table className={styles.stats}>
      <tbody>
      <tr>
        <td>Players</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}