import React, { useReducer} from 'react';
import ShowArea from './showArea';
import Buttons from './buttons';
import {Color} from './color';

function ReducerExample() {
    return (
        <div>
            <Color>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}

export default ReducerExample;