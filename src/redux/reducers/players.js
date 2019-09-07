import {ADD_PLAYER} from "../actionTypes";

let maxId = 4;

const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    {name: 'LDK', score: 0, id:1},
    {name: 'HONG', score: 10,  id:2},
    {name: 'KIM', score: 20,  id:3},
    {name: 'PARK', score: 30,  id:4},
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  // 새로운 state return
  switch (action.type) {
    case ADD_PLAYER:
      // 기존 players에 name을 가진 player 객체를 추가
      state.players.push({name: action.name, score: 0, id: ++maxId});
      return {
        ... state,
        players: [
          ...state.players
        ]
      }
    default:
      return state;
  }
}