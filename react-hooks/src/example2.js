import React, { useState, useEffect } from 'react';

function Example() {
    const [ age, setAge] = useState(18)
    const [ sex, setSex] = useState('男')
    useEffect(() => {
       console.log(`useEffect => ${age}`)
    })
    return (
        <div>
            <p>数组 {age} -- {sex} </p>
            <button onClick={() => {setAge(age + 1)}}>增加</button>
            <button onClick={() => {setSex(sex + 1)}}>增加</button>
        </div>
    )
}

export default Example;