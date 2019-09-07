import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/Scoreboard.module.css';   // 모듈 방식으로 적용



 class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = (e) => {
    console.log('submit');
    // submit의 기본 이벤트를 막기
    e.preventDefault();

    const form = document.getElementById("form");
    const players = document.getElementById("players");

    console.log(players.validity.valid);
    console.log(form.checkValidity());

    // 3) 부모에게서 받은 콜백 펑션을 호출
    // this.textInput.current === document.getElementById("players") => 노드를 얻을 수 있음
    this.props.addPlayer(this.textInput.current.value);
  }

  render() {
    {/* required: 어떠한 값도 입력하지않으면 submit 이벤트 X */}
    return (
      <form id="form" className={styles.form} onSubmit={this.handleSubmit} noValidate>
        <input id="players" className={styles.input} type="text" placeholder="enter a player's name"
          ref={this.textInput}
          required />
        <input className={styles.input} type="submit" value="Add Player"/>
      </form>
    );
  }
}

const mapActionToProps = (dispatch) => ({   // 부모의 state
  addPlayer: (name) => dispatch(addPlayer(name))
});

export default connect(null, mapActionToProps)(AddPlayerForm);
