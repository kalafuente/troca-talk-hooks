import { useState } from 'react';
import { CountStyles } from '../counter/CounterStyles';

type CounterProps = {
    dispatch: React.Dispatch<any>,
}
const Counter: React.FunctionComponent<CounterProps> = ({ dispatch }) => {
    const [count, setCount] = useState(0);
    return (
        <CountStyles>
            <p>Total en este componente: {count}</p>
            <button onClick={() => { dispatch('increment'); setCount(count + 1) }}>+1</button>
            <button onClick={() => { dispatch('decrement'); setCount(count - 1) }}>-1</button>
        </CountStyles>
    );
};

export default Counter;