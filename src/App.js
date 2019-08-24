import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player'


class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', score: 0, id:1},
      {name: 'HONG', score: 10,  id:2},
      {name: 'KIM', score: 20,  id:3},
      {name: 'PARK', score: 30,  id:4},
    ]
  }
  constructor() {
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChageScore = this.handleChageScore.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>   {/* "11" <-이렇게 넘기면 스트링 타입으로 넘어감! */}
        { this.state.players.map(player => <Player name={player.name} key={player.id} id={player.id} score={player.score} changeScore={this.handleChageScore} removePlayer={this.handleRemovePlayer} />) }
      </div>
    )
  }

  /*  handleRemovePlayer = (id) => {  // 애로우 함수 쓰게되면 자기자신을 가리키는 렉셔널 디스가 됨
      // 삭제로직
      console.log('handleRemovePlayer', id);
      this.setState(prevState => {
        const players = prevState.players.filter(player => player.id !== id)
        return {players}   // 쇼텐더 프로퍼티 : 키와 밸류가 같으면 생략해도 된다.
      })
    }*/

  handleRemovePlayer(id) {  // 애로우 함수 쓰게되면 자기자신을 가리키는 렉셔널 디스가 됨
    console.log(this);
    // 삭제로직
    console.log('handleRemovePlayer', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players}   // 쇼텐더 프로퍼티 : 키와 밸류가 같으면 생략해도 된다.
    })
  }

  handleChageScore(id, delta) {   // id: player가 누군지 알려주는 값
    console.log(id, delta);
    this.setState(prevState => {
      // id에 해당되는 player를 찾은 다음 score에 delta를 더 한다.
      const players = [ ...prevState.players ];
      prevState.players.forEach(player => {
        if(player.id === id) {
          player.score += delta;
        }
      })
      return {playesr: players}
    })
  }
}

export default App;
