import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div>
                <h2>Info - {this.props.counter}</h2>
            </div>
        );
    }
}

export default Info;