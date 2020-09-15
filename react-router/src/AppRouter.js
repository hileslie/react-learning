import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import Video from './pages/Video';
import Work from './pages/work';

// import Index from './pages/index'
// import List from './pages/list'
// import Home from './pages/home'

// function AppRouter() {
//     return (
//         <Router>
//             <ul>
//                 <li><Link to="/">首页</Link></li>
//                 <li><Link to="/list/1">列表</Link></li>
//             </ul>
//             <Route path="/" exact component={Index}></Route>
//             <Route path="/list/:id" component={List}></Route>
//             <Route path="/home/" component={Home}></Route>
//         </Router>
//     )
// }

function AppRouter() {
    let routerConfig = [
        {
            path: '/',
            title: '首页',
            exact: true,
            component: Index
        },
        {
            path: '/video/',
            title: '视频',
            exact: false,
            component: Video
        },
        {
            path: '/work/',
            title: 'work',
            exact: false,
            component: Work
        }
    ]
    return (
        <Router>
            <div>
                <h3>一级导航</h3>
                <ul>
                    {/* <li><Link to="/">首页</Link></li>
                    <li><Link to="/video/">视频</Link></li>
                    <li><Link to="/work/">work</Link></li> */}
                    {
                        routerConfig.map((item, index) => {
                            return (
                                <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                {/* <Route path="/" exact component={Index}></Route>
                <Route path="/video/" component={Video}></Route>
                <Route path="/work/" component={Work}></Route> */}
                {
                        routerConfig.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                            )
                        })
                    }
            </div>
        </Router>
    )
}

export default AppRouter