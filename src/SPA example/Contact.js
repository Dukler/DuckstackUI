import React from 'react';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                    our <a href="http://duckstack.com">forums</a>.
                </p>
            </div>
        );
    }
}