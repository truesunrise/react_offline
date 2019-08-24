import React from 'react';


// 부모가 같은 메서드를 다시 '재정의'해서 쓰는것 = 오버라이딩
export class Count extends React.Component {   // 리액트 컴포넌트 클래스의 모든 속성과 메서드를 물려받겠다.

  /*  constructor() {
      super();  // 부모 생성자 함수 호출해서 속성 초기화
      this.  state = {
        score: 0
      }
    }*/

  // render : 리액트 컴포넌트가 갖고있는 메소드임
  // event의 오른쪽은 함수 선언문이 들어가야 한다. 함수 호출해서 그 결과물 넣는거 아님!!!!
/*  handleChangeScore(delta) {
    console.log('incrementScore', this);
    this.setState( prevState => ({score: prevState.score + delta}));
  }*/

  render() {
    return (
      <div className="counter">
        {/*onclick 오른쪽 :*/}
        <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    )
  }
}