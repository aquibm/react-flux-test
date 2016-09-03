import React from 'react';
import ReactDOM from 'react-dom';

import { Forum } from './components/forum.jsx';
import { EventEmitter } from './eventEmitter.js';
import AppDispatcher from './data/appDispatcher.js';

ReactDOM.render(<Forum />, document.getElementById('forum'));

const emitter = new EventEmitter();

emitter.on('START', function () {
    console.log('Started the app!');
});

emitter.on('START', function() {
    console.log('Another listener!');
});

emitter.emit('START');

AppDispatcher.register(function(action) {
    console.log('Recieved action');
    console.log(action);
});
