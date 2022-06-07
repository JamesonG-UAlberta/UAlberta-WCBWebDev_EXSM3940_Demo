import React, { Component } from 'react';

class ReduxDemo extends Component {  
    render() {
        return (
            <div>
                <ul>{this.props.items.map(x => <li key={x}>{x}</li>)}</ul>
                <input ref={thisNode => this.inputField = thisNode} type="text"></input>
                <button onClick={() => {this.props.onAdd(this.inputField.value.trim())}}>Add</button>
                <button onClick={this.props.onSort}>Sort</button>
            </div>
        );
    }
}

export default ReduxDemo;