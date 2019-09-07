import React from 'react';
import './App.css';
import Header from './components/Header';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";

// Container Component
class App extends React.Component{

  getHighScore() {
    let highScore = 0;
    this.props.players.forEach(player => {
      if(player.score > highScore) {
        highScore = player.score;
      }
    });
    return highScore;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players}/>   {/* "11" <-이렇게 넘기면 스트링 타입으로 넘어감! */}
        { this.props.players.map(player =>

          <CustomPlayer name={player.name} key={player.id}
                  id={player.id}
                  score={player.score}
                  isHighScore={player.score === this.getHighScore()}
                   />) }
          {/* 2) 콜백 펑션을 props로 내려주기 */}
          <AddPlayerForm />
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

  // handleRemovePlayer(id) {  // 애로우 함수 쓰게되면 자기자신을 가리키는 렉셔널 디스가 됨
  //   console.log(this);
  //   // 삭제로직
  //   console.log('handleRemovePlayer', id);
  //   this.setState(prevState => {
  //     const players = prevState.players.filter(player => player.id !== id)
  //     return {players}   // 쇼텐더 프로퍼티 : 키와 밸류가 같으면 생략해도 된다.
  //   })
  // }

  // handleChageScore(id, delta) {   // id: player가 누군지 알려주는 값
  //   console.log(id, delta);
  //   this.setState(prevState => {
  //     // id에 해당되는 player를 찾은 다음 score에 delta를 더 한다.
  //     const players = [ ...prevState.players ];
  //     prevState.players.forEach(player => {
  //       if(player.id === id) {
  //         player.score += delta;
  //       }
  //     })
  //     return {playesr: players}
  //   })
  // }

  // 1) 콜백 펑션 정의
  // handleAddPlayer = (name) => {
  //   console.log(name);
  //   // add player 로직
  //   this.setState(prevState => {
  //     // 원본 배열 훼손 X => deep copy
  //     // 새로운 바구니(= 배열)를 만든다. => 배열 안에 있는 공들을 꺼내어 새로운 배열 안에다가 펼쳐라. (공들은 카피하지않았다.)
  //     // []: 새로운 바구니, 새로운 메모리 주소
  //     const players = [ ... prevState.players ]
  //
  //     players.push({name, score: 0, id: ++this.maxId})
  //
  //     return {players};
  //   });
  // }
}

const mapStateToProps = (state) => ({   // 부모의 state
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(App);
