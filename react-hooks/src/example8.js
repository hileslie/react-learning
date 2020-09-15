import React, { useState, useMemo } from 'react';

function Example() {
    const [a ,setA] = useState('a')
    const [b ,setB] = useState('b')

    return (
        <div>
            <button onClick={() => {setA(new Date().getTime())}}>aaa</button>
            <button onClick={() => {setB(new Date().getTime() + 'bbb')}}>bbb</button>
            <Child name={a}>{b}</Child>
        </div>
    )
}

function Child({name, children}) {
    function changeA() {
        console.log('changeA')
        return name
    }
    const actionA = useMemo(() => changeA(name), [name]) 
    return (
        <>
            <div>{actionA}</div>
            <div>{children}</div>
        </>
    )
}

export default Example