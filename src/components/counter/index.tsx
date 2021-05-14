import React from 'react'
import { CounterWithReactClass } from './CounterWithReactClass';
import { CounterWithHooks } from './CounterWithHooks';

const Counter: React.FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <CounterWithReactClass />
            <CounterWithHooks />
        </>
    )
}

export default Counter
