import React, { useRef, useState, useEffect } from 'react';


function Example() {
    const inputEl = useRef(null)
    const add = () => {
        inputEl.current.value = 'leslie'
        console.log(inputEl)
    }
    const [text, setText] = useState('hi')
    
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log('textRef.current: ', textRef.current)
    })

    return (
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={add}>展示文字</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </div>
    )
}

export default Example