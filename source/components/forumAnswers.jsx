import React from 'react';
import { ForumAnswer } from './forumAnswer.jsx';
import AppDispatcher from '../data/appDispatcher.js';

export class ForumAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.answers = [];

        for (var key in this.props.allAnswers) {
            this.answers.push(
                <ForumAnswer key={key} id={key} answer={ this.props.allAnswers[key] } onMarkCorrect={ this.onMarkCorrect } />
            );
        }

        this.onMarkCorrect = this.onMarkCorrect.bind(this);
    }

    onMarkCorrect(id) {
        AppDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });
    }

    render() {
        return (
            <div>
                { this.answers }
            </div>
        );
    }
}
