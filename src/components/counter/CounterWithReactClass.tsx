import React from "react";
import { CountStyles } from "./CounterStyles";
export class CounterWithReactClass extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <CountStyles>
                <p>Este componente está hecho con una clase</p>
                <p>Diste click {this.state.count} veces</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clickeame crack
                </button>
            </CountStyles>
        );
    }
}