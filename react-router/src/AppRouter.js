import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    return (
        <div>hi</div>
    )
}

function List() {
    return (
        <div>leslie</div>
    )
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/" component={List}></Route>
        </Router>
    )
}

export default AppRouter