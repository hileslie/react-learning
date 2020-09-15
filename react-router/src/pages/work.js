import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import getup from './work/getup';
import money from './work/money';

function Work() {
    return (
        <div>
            <ul>
                <li><Link to="/work/getup">getup</Link></li>
                <li><Link to="/work/money">money</Link></li>
            </ul>
            <div>
                <div>Work 页面</div>
                <Route path="/work/getup/" component={getup}></Route>
                <Route path="/work/money/" component={money}></Route>
            </div>
        </div>
    )
}

export default Work
