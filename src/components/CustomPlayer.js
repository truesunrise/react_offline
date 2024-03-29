import React from 'react';
import Player from "./Player";
import classNames from 'classnames';

import styles from '../pages/Scoreboard.module.css';   // 모듈 방식으로 적용

// 상속 받은게 아니고 children으로 새 기능을 포함하여 Player에게 넘겨줌
export const CustomPlayer = (props) => {
  // let dynamicClass = styles.svg;
  // if(props.isHighScore) {
  //   dynamicClass += ' ' + styles.isHighScore;
  //
  // };

  let dynamicClass = classNames(styles.svg, { [styles['is-high-score']]: props.isHighScore });

  return (
    <Player {...props}>
      <svg viewBox="0 0 44 35" className={dynamicClass}>
        <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
        <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
      </svg>
    </Player>
  );
};