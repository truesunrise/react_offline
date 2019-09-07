import {combineReducers} from "redux";
import {playerReducer} from "./players";

export const allReducers = combineReducers({
  playerReducer: playerReducer
})

// 초기 state를 적으시오.
// {
//   player: {
//     title: 'My Scoreboard'
//     players: { ... }
//   }
// }