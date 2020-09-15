import React, { useState, createContext , useContext} from 'react';

const CountContext = createContext()

function Child() {
    let count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}

function Example() {
    const [ count, setCount] = useState(0)
    return (
        <div>
            <p>数组 {count} </p>
            <button onClick={() => {setCount(count + 1)}}>增加</button>
            <CountContext.Provider
                value={count}
            >
                <Child></Child>
            </CountContext.Provider>
        </div>
    )
}

export default Example;