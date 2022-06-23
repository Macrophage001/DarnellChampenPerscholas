import React, { useState, useContext } from 'react';
import { context } from '../context';

export const DivThree = () => {
    const [tardis, setTardis] = useState({
        name: 'Time and Relative Dimension in Space',
        caps: false,
    });

    const ctx = useContext(context);

    const changeIt = (text) => {
        if (tardis.caps) {
            setTardis({
                name: text.toLowerCase(),
                caps: false,
            });
        } else {
            setTardis({
                name: text.toUpperCase(),
                caps: true,
            });
        }
        ctx.dispatch({ type: 'add', payload: null });
    }

    return (
        <div onClick={() => changeIt(tardis.name)}>
            <h3>{tardis.name}</h3>
            <h4>{ctx.state}</h4>
        </div>
    );
}
