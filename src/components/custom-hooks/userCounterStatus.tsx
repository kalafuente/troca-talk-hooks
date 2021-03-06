import { useState } from "react";

function useReducer(reducer: any, initialState: any) {
    const [state, setState] = useState(initialState);

    function dispatch(action: any) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}
export default useReducer