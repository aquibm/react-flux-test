import React from 'react';
import { ForumAnswer } from './forumAnswer.jsx';
import AppActions from '../actions/appActions.js';

export class ForumAnswers extends React.Component {
    constructor(props) {
        super(props);
        this.onMarkCorrect = this.onMarkCorrect.bind(this);
    }

    onMarkCorrect(id) {
        AppActions.markAnswerCorrect(id);
    }

    render() {
        this.answers = [];

        for (var key in this.props.allAnswers) {
            this.answers.push(
                <ForumAnswer key={key} id={key} answer={ this.props.allAnswers[key] } onMarkCorrect={ this.onMarkCorrect } />
            );
        }

        return (
            <div>
                { this.answers }
            </div>
        );
    }
}
