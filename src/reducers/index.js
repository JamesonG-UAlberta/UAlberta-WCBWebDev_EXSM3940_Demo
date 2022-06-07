// In this case, 0 becomes the initialized state (starting value).
export default (state = [], action) => {
    console.log("Old state: "+state.length);
    let newState = state;
    // These values represent pre-allocated actions to perform on the state.
    // These would be things you do commonly that it would be annoying to type out anonymous methods for every time you do them.
    switch (String(action.type).toUpperCase().trim()) {
        case 'ADD':
            newState = [...state, action.newItem];
            break;
        case 'SORT':
            newState = [...state.sort()];
            break;
        // Default will return current state because it was initialized to it.
    }
    console.log("New state: "+newState.length);
    return newState;
};
