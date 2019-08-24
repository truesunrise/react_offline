import React from 'react';
import {Stats} from "./Stats";
// name export

// 함수이름 : 대문자
// 반드시 리액트 엘리먼트를 리턴
// 함수 표현식을 쓰는 것을 권장
export const Header = ({title, totalPlayers, players}) => {
  // props는 readonly 속성이 있다. 부모에게서 받은 props를 자식이 바꿀 수 없다.
  // 프롭스는 위에서부터 아래로 흐른다. 중간에 프롭스를 바꾸게되면 밑으로는 흐르지만 위는 안바뀜. 프롭스는 반드시 부모컴포넌트가 바꾸어야함.

  // props객체의 각 키에 해당되는 값이 해체되어 각 키에 들어감
  // const {title, totalPlayers} = props;
  return (
    <header className="header">
      <Stats players={players}/>
      <h1 className="h1">{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  )
}