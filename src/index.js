import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Root} from "./pages/Root";
import App from "./App";

// from 없이 import하면 하위 컴포넌트에서 import 하더라도 글로벌적으로 적용된다.
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // unregister: PWA 모드를 꺼놨음
