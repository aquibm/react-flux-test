import React from 'react';

import { ForumHeader } from './forumHeader.jsx';
import { ForumQuestion } from './forumQuestion.jsx';
import { ForumAnswers } from './forumAnswers.jsx';
import { ForumAddAnswerBox } from './forumAddAnswerBox.jsx';
import AppActions from '../actions/appActions.js';
import AppStore from '../data/appStore.js';

export class Forum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allAnswers: AppStore.getAnswers()
        };

        this.onAddAnswer = this.onAddAnswer.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onAddAnswer(answerText) {
        AppActions.addNewAnswer(answerText);
    }

    onChange() {
        this.setState({
            allAnswers: AppStore.getAnswers()
        });
    }

    componentDidMount() {
        AppStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        AppStore.removeListener(this.onChange);
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
