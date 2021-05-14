import React, { useState } from 'react';
import { CountStyles } from './CounterStyles';

export function CounterWithHooks() {
    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);
    return (
        <CountStyles>
            <div>
                <p>Este componente está hecho con una función</p>
                <p>Diste click {count} veces</p>
                <button onClick={() => setCount(count + 1)}>
                    Clickeame crack
      </button>
            </div>
        </CountStyles>
    );
}