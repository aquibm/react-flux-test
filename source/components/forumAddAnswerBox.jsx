import React from 'react';

export class ForumAddAnswerBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.addAnswer = this.addAnswer.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addAnswer() {
        this.props.onAddAnswer(this.state.value);

        this.setState({
            value: ''
        });
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h4>Add an answer</h4>
                <textarea id="addAnswer" className="col-md-6 col-xs-8" value={ this.state.value } onChange={ this.onChange }></textarea>
                &nbsp; <input type="button" className="btn btn-primary" value="Add" onClick={ this.addAnswer } />
            </div>
        );
    }
}
