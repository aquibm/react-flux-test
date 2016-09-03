import React from 'react';

import { ForumHeader } from './forumHeader.jsx';
import { ForumQuestion } from './forumQuestion.jsx';
import { ForumAnswers } from './forumAnswers.jsx';
import { ForumAddAnswerBox } from './forumAddAnswerBox.jsx';
import AppDispatcher from '../data/appDispatcher.js';

export class Forum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        };

        this.onAddAnswer = this.onAddAnswer.bind(this);
    }

    onAddAnswer(answerText) {
        AppDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }

    render() {
        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <hr />
                    <ForumAddAnswerBox onAddAnswer={ this.onAddAnswer }/>
                </div>
            </div>
        );
    }
}
