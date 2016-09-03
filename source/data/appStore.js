import FakeAnswerData from './fakeAnswerData';
import { EventEmitter } from '../eventEmitter.js';
import AppDispatcher from './appDispatcher.js';

class Store extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((action) => {
            switch (action.actionType) {
                case 'FORUM_ANSWER_ADDED': {
                    console.log('Answer added');
                    this.addAnswer(action.newAnswer);
                    break;
                }

                case 'FORUM_ANSWER_MARKED_CORRECT': {
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
