import { EventEmitter } from '../eventEmitter.js';

import FakeAnswerData from './fakeAnswerData';
import AppDispatcher from './appDispatcher.js';
import AppConstants from '../constants/appConstants.js';

class Store extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((action) => {
            switch (action.actionType) {
                case AppConstants.FORUM_ANSWER_ADDED: {
                    console.log('Answer added');
                    this.addAnswer(action.newAnswer);
                    break;
                }

                case AppConstants.FORUM_ANSWER_MARKED_CORRECT: {
                    console.log('Answer marked correct');
                    this.markAsCorrect(action.id);
                }
            }
        });
    }

    getAnswers() {
        return FakeAnswerData;
    }

    addAnswer(newAnswer) {
        FakeAnswerData[Object.keys(FakeAnswerData).length + 1] = {
            body: newAnswer,
            correct: false
        };

        this.emitChange();
    }

    markAsCorrect(id) {
        for (var key in FakeAnswerData) {
            FakeAnswerData[key].correct = false;
        }

        FakeAnswerData[id].correct = true;
        this.emitChange();
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(listener) {
        this.on('change', listener);
    }
}

const AppStore = new Store();
export default AppStore;
