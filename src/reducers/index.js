// In this case, 0 becomes the initialized state (starting value).
export default (state = 0, action) => {
    let newState = state;
    // These values represent pre-allocated actions to perform on the state.
    // These would be things you do commonly that it would be annoying to type out anonymous methods for every time you do them.
    switch (String(action.type).toUpperCase().trim())
    {
        case 'DOUBLE':
            newState *= 2;
            break;
        case 'TRIPLE':
            newState *= 3;
            break;
        case 'HALF':
            newState /= 2;
            break;
        case 'ADD':
            newState++;
            break;
        // Default will return current state because it was initialized to it.
    }
    console.log(newState);
    return newState;
};