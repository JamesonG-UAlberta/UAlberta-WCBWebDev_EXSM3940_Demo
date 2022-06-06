import React, { Component } from 'react';

class ReduxDemo extends Component {  
    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.onDouble}>*2</button>
                <button onClick={this.props.onTriple}>*3</button>
                <button onClick={this.props.onHalf}>/2</button>
                <button onClick={this.props.onAdd}>+1</button>
            </div>
        );
    }
}

export default ReduxDemo;