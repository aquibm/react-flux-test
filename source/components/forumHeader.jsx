import React from 'react';

export class ForumHeader extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React Forum</a>
                    </div>
                </div>
            </nav>
        );
    }
}
