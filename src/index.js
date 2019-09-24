import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyAVjxq45FPWeKIBGGM83uc8r2KLsobTRMc",
    authDomain: "task-manager-4cdbd.firebaseapp.com",
    databaseURL: "https://task-manager-4cdbd.firebaseio.com",
    projectId: "task-manager-4cdbd",
    storageBucket: "",
    messagingSenderId: "908873785787",
    appId: "1:908873785787:web:c5af477d3fefd69a45a49e"
})

ReactDOM.render(
    <Router />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
