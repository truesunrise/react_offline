import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';

import styles from '../pages/Scoreboard.module.css';   // 모듈 방식으로 적용

// 부모가 같은 메서드를 다시 '재정의'해서 쓰는것 = 오버라이딩
class Count extends React.Component {   // 리액트 컴포넌트 클래스의 모든 속성과 메서드를 물려받겠다.

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
      <div className={styles.counter}>
        {/*onclick 오른쪽 :*/}
        <button className={classNames(styles.counterAction, styles.decrement)}
                onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className={styles.counterScore}>{this.props.score}</span>
        <button className={classNames(styles.counterAction, styles.increment)}
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    )
  }
}

// 코드의 가독성을 높이기위해 사용됨
Count.propTypes = {
  score: PropTypes.number,
  id: PropTypes.number,
  chageScore: PropTypes.func
}

const mapActionToProps = (dispatch) => ({   // 부모의 state
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
});

export default connect(null, mapActionToProps)(Count);