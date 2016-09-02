import React from 'react';
import { ForumAnswer } from './forumAnswer.jsx';

export class ForumAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.answers = [];

        for (var key in this.props.allAnswers) {
            this.answers.push(
                <ForumAnswer key={key} id={key} answer={ this.props.allAnswers[key] } />
            );
        }
    }

    render() {
        return (
            <div>
                { this.answers }
            </div>
        );
    }
}
