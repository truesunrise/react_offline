import {combineReducers} from "redux";

export const allReducers = combineReducers({
  // eslint-disable-next-line no-undef
  player: playerReducer
})

// 초기 state를 적으시오.
// {
//   player: {
//     title: 'My Scoreboard'
//   }
// }