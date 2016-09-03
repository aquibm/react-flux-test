import AppDispatcher from '../data/appDispatcher.js';
import AppConstants from '../constants/appConstants.js';

class ActionStore {

    addNewAnswer(answerText) {
        AppDispatcher.dispatch({
            actionType: AppConstants.FORUM_ANSWER_ADDED,
            newAnswer: answerText
        });
    }

    markAnswerCorrect(id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.FORUM_ANSWER_MARKED_CORRECT,
            id: id
        });
    }
}

const AppActions = new ActionStore();
export default AppActions;
