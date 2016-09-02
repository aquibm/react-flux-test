import React from 'react';
import { ForumHeader } from './forumHeader.jsx';

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
    }

    render() {
        return (
            <div>
                <ForumHeader allAnswers={this.state.allAnswers} />
            </div>
        );
    }
}
