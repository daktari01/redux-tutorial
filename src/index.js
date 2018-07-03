import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action){
    return state;
}

function userReducer(state='', action){
    return state
}

const allReducers = combineReducers({
    products: productsReducer,
    users: userReducer
});

const store = createStore(allReducers, {
    products: [{name: 'iPhone'}],
    users: 'Michael'
});

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
