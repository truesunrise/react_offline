import React from 'react';
import './App.css';


// 함수이름 : 대문자
// 반드시 리액트 엘리먼트를 리턴
// 함수 표현식을 쓰는 것을 권장
const Header = ({title, totalPlayers}) => {
  // props는 readonly 속성이 있다. 부모에게서 받은 props를 자식이 바꿀 수 없다.
  // 프롭스는 위에서부터 아래로 흐른다. 중간에 프롭스를 바꾸게되면 밑으로는 흐르지만 위는 안바뀜. 프롭스는 반드시 부모컴포넌트가 바꾸어야함.

  // props객체의 각 키에 해당되는 값이 해체되어 각 키에 들어감
  // const {title, totalPlayers} = props;
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  )
}

// 부모가 같은 메서드를 다시 '재정의'해서 쓰는것 = 오버라이딩
class Count extends React.Component {   // 리액트 컴포넌트 클래스의 모든 속성과 메서드를 물려받겠다.
  // state : 속성
  state = {
    score: 0,
    a: 10
  }
  constructor() {
    super();
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }
  /*  constructor() {
      super();  // 부모 생성자 함수 호출해서 속성 초기화
      this.  state = {
        score: 0
      }
    }*/

  // render : 리액트 컴포넌트가 갖고있는 메소드임
  // event의 오른쪽은 함수 선언문이 들어가야 한다. 함수 호출해서 그 결과물 넣는거 아님!!!!
  handleChangeScore(delta) {
    console.log('incrementScore', this);
    this.setState( prevState => ({score: prevState.score + delta}));
  }

  render() {
    return (
      <div className="counter">
        {/*onclick 오른쪽 :*/}
        <button className="counter-action decrement" onClick={() => this.handleChangeScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={() => this.handleChangeScore(1)}> + </button>
      </div>
    )
  }
}

// 중괄호 안에 리턴문 하나 있으니까 리턴문 없앰
const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
    </span>
    <Count></Count>
  </div>
)

class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', id:1},
      {name: 'HONG', id:2},
      {name: 'KIM', id:3},
      {name: 'PARK', id:4},
    ]
  }
  constructor() {
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>   {/* "11" <-이렇게 넘기면 스트링 타입으로 넘어감! */}
        { this.state.players.map(player => <Player name={player.name} key={player.id} id={player.id} removePlayer={this.handleRemovePlayer}/>) }
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
}

export default App;
