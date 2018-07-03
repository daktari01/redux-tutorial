import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

function productsReducer(state = [], action){
    return state;
}

function userReducer(state='', { type, payload }){
    switch(type){
        case 'updateUser':
            return payload;
    }
    return state
}

const allReducers = combineReducers({
    products: productsReducer,
    users: userReducer
});

const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        users: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
