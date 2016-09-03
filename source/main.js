import React from 'react';
import ReactDOM from 'react-dom';

import { Forum } from './components/forum.jsx';
import { EventEmitter } from './eventEmitter.js';
import AppDispatcher from './data/appDispatcher.js';

ReactDOM.render(<Forum />, document.getElementById('forum'));
