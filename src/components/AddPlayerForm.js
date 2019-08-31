import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleSubmit = (e) => {
    console.log('submit');
    // submit의 기본 이벤트를 막기
    e.preventDefault();

    const form = document.getElementById("form");
    const players = document.getElementById("players");

    console.log(players.validity.valid);
    console.log(form.checkValidity());

    // 3) 부모에게서 받은 콜백 펑션을 호출
    this.props.addPlayer(this.state.value);
  }

  render() {
    {/* required: 어떠한 값도 입력하지않으면 submit 이벤트 X */}
    return (
      <form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
        <input id="players" className="input" type="text" placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
          required />
        <input className="input" type="submit" value="Add Player"/>
      </form>
    );
  }
}