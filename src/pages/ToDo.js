import '../App.css';
import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state.
        this.state = {
            pendingItems: [],
            completedItems: [],
            inputValue: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Pending Items</h3>
                    {/* For each item in our items list, render a list item. */}
                    {this.state.pendingItems.map(x => <li key={x}><input type="checkbox" onChange={((event) => {
                         this.setState(currentState => ({
                            // Replace pending items with everything sans the item we're moving.
                            pendingItems: [...currentState.pendingItems.filter(y => y !== x)],
                            // Append the item we're moving to completed items.
                            completedItems: [...currentState.completedItems, x]
                        }));
                    }).bind(this)}></input>{x}</li>)}
                </ul>
                <ul>
                    <h3>Completed Items</h3>
                    {/* For each item in our items list, render a list item. */}
                    {this.state.completedItems.map(x => <li key={x}><input type="checkbox" defaultChecked onChange={((event) => {
                         this.setState(currentState => ({
                            // Replace pending items with everything sans the item we're moving.
                            completedItems: [...currentState.completedItems.filter(y => y !== x)],
                            // Append the item we're moving to completed items.
                            pendingItems: [...currentState.pendingItems, x]
                        }));
                    }).bind(this)}></input>{x}</li>)}
                </ul>
                {/* Bind our input to a reference called toDoInput, allowing us to use it without a querySelector, etc.*/}
                <input type="text" value={this.state.inputValue} ref={thisNode => this.toDoInput = thisNode} onChange={this.handleInput}></input>
                <button onClick={(() => {
                    {/* 
                        When we click the button, overwrite the existing items array with the previous items plus the new item. 
                        You must treat state items as immutable. That means no append(), no pop(), no push().
                        That's because calling those methods does not trigger a refresh, as they do not call setState.
                        We can use the spread operator (...) to generate a new array including all the items from the old one, plus something else.
                    */}
                    if (this.toDoInput.value.trim() !== "")
                    {
                        this.setState(currentState => ({
                            pendingItems: [...currentState.pendingItems, this.toDoInput.value.trim()]
                        }));
                    }
                    this.setState({
                        inputValue: ""
                    });
                    this.toDoInput.focus();
                }).bind(this)}>Add Item</button>
                <button onClick={(() => {
                    this.setState({
                        pendingItems: []
                    });
                }).bind(this)}>Clear Items</button>
                <button onClick={(() => {
                    this.setState(currentState => ({
                        pendingItems: [...currentState.pendingItems.sort()]
                    }));
                }).bind(this)}>Sort Items</button>
            </div>
        );
    }

}
export default ToDo;