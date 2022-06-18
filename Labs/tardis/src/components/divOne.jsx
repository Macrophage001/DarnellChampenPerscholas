import React, { Component } from 'react';
import { DivTwo } from './divTwo';

export class DivOne extends Component {
    render() {
        return (
            <div>
                <DivTwo />
            </div>
        );
    }
}
