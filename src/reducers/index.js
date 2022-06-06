export default (state = 0, action) => {
    let newState = state;
    switch (action.type)
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
    return newState;
};