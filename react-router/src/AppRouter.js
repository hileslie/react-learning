import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'


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