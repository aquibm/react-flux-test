import React from 'react';

export class ForumAnswer extends React.Component {

    // TODO(AM): Check why static propTypes doesn't work (prolly babelrc)

    render() {
        var answer = this.props.answer;

        return (
                <div className="panel panel-default">
                    <div className="panel-body">
                        { answer.body }
                    </div>
                </div>
        );
    }
}
