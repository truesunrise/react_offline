import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

// action creator (부모와 자식간의 통신할 때 필요)
// 액션은 객체다. 액션 크리에이터는 액션을 동적으로 만든다.
export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
});

export const changeScore = (id, delta) => ({
  type: CHANGE_SCORE,
  id,
  delta
});

export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  id
})