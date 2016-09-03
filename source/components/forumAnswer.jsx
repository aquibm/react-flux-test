import React from 'react';

export class ForumAnswer extends React.Component {

    // TODO(AM): Check why static propTypes doesn't work (prolly babelrc)
    constructor(props) {
        super(props);

        this.markCorrect = this.markCorrect.bind(this);
    }

    markCorrect() {
        this.props.onMarkCorrect(this.props.id);
    }

    render() {
        var answer = this.props.answer;
        var markAnswerAsCorrectLink;

        if(!answer.correct) {
            markAnswerAsCorrectLink = (
                <div className="pull-right">
                    <small><a href="#" onClick={ this.markCorrect }>Mark as Correct</a></small>
                </div>
            );
        }

        var classNames = 'panel-body' + (answer.correct ? ' bg-success' : '');

        return (
                <div className="panel panel-default">
                    <div className={ classNames }>
                        { answer.body }
                        { markAnswerAsCorrectLink }
                    </div>
                </div>
        );
    }
}
