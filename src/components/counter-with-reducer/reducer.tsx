const reducer = (state: any, action: any) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        default: throw new Error('Unexpected action');
    }
};

export default reducer