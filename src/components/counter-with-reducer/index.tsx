import { useReducer } from 'react';
import reducer from './reducer';
import { CountStyles } from '../counter/CounterStyles';
import Counter from './RealCounter';

const initialState = 0;

const CounterStatus = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <CountStyles>
            Click {count}
            <Counter dispatch={dispatch} />
            <Counter dispatch={dispatch} />
        </CountStyles>
    );
};

export default CounterStatus;