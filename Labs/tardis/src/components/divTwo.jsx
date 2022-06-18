import React, { Component } from 'react';
import { DivThree } from './divThree';


export class DivTwo extends Component {
    render() {
        return (
            <div>
                <DivThree />
                <DivThree />
            </div>
        );
    }
}
