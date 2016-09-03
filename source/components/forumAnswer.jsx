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

        return (
                <div className="panel panel-default">
                    <div className="panel-body">
                        { answer.body }
                        <div className="pull-right">
                            <small><a href="#" onClick={ this.markCorrect }>Mark as Correct</a></small>
                        </div>
                    </div>
                </div>
        );
    }
}
