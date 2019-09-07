import React from 'react';
import {Stats} from "./Stats";
import Stopwatch from "./Stopwatch";
// name export
import PropTypes from 'prop-types';
import {connect} from "react-redux";

// 함수이름 : 대문자
// 반드시 리액트 엘리먼트를 리턴
// 함수 표현식을 쓰는 것을 권장
 const Header = ({title, players}) => {
  // props는 readonly 속성이 있다. 부모에게서 받은 props를 자식이 바꿀 수 없다.
  // 프롭스는 위에서부터 아래로 흐른다. 중간에 프롭스를 바꾸게되면 밑으로는 흐르지만 위는 안바뀜. 프롭스는 반드시 부모컴포넌트가 바꾸어야함.

  // props객체의 각 키에 해당되는 값이 해체되어 각 키에 들어감
  // const {title, totalPlayers} = props;
  return (
    <header className="header">
      <Stats players={players}/>
      {/* eslint-disable-next-line no-undef */}
      <h1 className="h1">{title}</h1>
      <Stopwatch/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: 'Scoreboard'
}

// store의 title을 props로 내려받아서 화면에 표시하기
const mapStateToProps = (state) => ({
   title: state.playerReducer.title
});

export default connect(mapStateToProps)(Header);