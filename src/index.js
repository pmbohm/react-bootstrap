import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-bootstrap';

var Alert = require('react-bootstrap/lib/Alert'); // or var Alert = require('react-bootstrap').Alert;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
