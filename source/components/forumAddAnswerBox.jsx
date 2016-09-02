import React from 'react';

export class ForumAddAnswerBox extends React.Component {
    render() {
        return (
            <div>
                <h4>Add an answer</h4>
                <textarea id="addAnswer" className="col-md-6 col-xs-8"></textarea>
                &nbsp; <input type="button" className="btn btn-primary" value="Add" />
            </div>
        );
    }
}
