import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Vpage from './video/VPage';
import Vpage2 from './video/VPage2';

function Video() {
    return (
        <div>
            <ul>
                <li><Link to="/video/vpage">VPage</Link></li>
                <li><Link to="/video/vpage2">VPage2</Link></li>
            </ul>
            <div>
                <div>video 页面</div>
                <Route path="/video/vpage/" component={Vpage}></Route>
                <Route path="/video/vpage2/" component={Vpage2}></Route>
            </div>
        </div>
    )
}

export default Video
