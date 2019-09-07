import React from 'react';
import {connect} from "react-redux";
import Header from "../components/Header";
import {CustomPlayer} from "../components/CustomPlayer";
import AddPlayerForm from "../components/AddPlayerForm";

// Scoreboard.css는 Scordboard 컴포넌트만 적용된게 아니라 글로벌하게 적용
import styles from './Scoreboard.module.css';   // 모듈 방식으로 적용

// Container Component
class Scoreboard extends React.Component{

  getHighScore() {
    let highScore = 0;
    this.props.players.forEach(player => {
      if(player.score > highScore) {
        console.log('***********************************');

        console.log('player.score: ', player.score);
        console.log('highScore: ', highScore);

        highScore = player.score;

        console.log('highScore: ', highScore);
        console.log('============================');


      }
    });
    return highScore;
  }

  render() {
    return (
      <div className={styles.scoreboard}>
        <Header title="My Scoreboard" players={this.props.players}/>   {/* "11" <-이렇게 넘기면 스트링 타입으로 넘어감! */}
        { this.props.players.map(player =>

          <CustomPlayer name={player.name} key={player.id}
                        id={player.id}
                        score={player.score}
                        isHighScore={player.score === this.getHighScore()}
          />) }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({   // 부모의 state
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(Scoreboard);
