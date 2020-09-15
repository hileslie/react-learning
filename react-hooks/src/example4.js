import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log(`Index =>useEffect =>`)

        return () => {
            console.log(`Index =>useEffect => return`)
        }
    }, [])
    return (
        <div>index</div>
    )
}

function List() {
    useEffect(() => {
        console.log(`List =>useEffect =>`)
    })
    return (
        <div>List</div>
    )
}

function Example() {
    const [ count, setCount] = useState(0)
    useEffect(() => {
       console.log(`useEffect => ${count}`)
       return () => {
            console.log(`===================================`)
        }
    }, [count])
    return (
        <div>
            <p>数组 {count} </p>
            <button onClick={() => {setCount(count + 1)}}>增加</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div>
    )
}

export default Example;