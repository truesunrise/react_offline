import React from 'react';

export const Stats = (props) => {
  // todo: 로직구현
  const totalPlayers = 0; //props.players로 로직 구현;
  const totalScore = 0; //props.players로 로직 구현;
  return (
    <table className="stats">
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