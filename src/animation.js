import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>动画 leslie</div>
                <div><button onClick={this.toToggole}>点击</button></div>
                <hr></hr>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="leslie-text">
                    <div>
                        新动画 leslie
                    </div>
                </CSSTransition>
            </div>
         );
    }

    toToggole() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Animation;