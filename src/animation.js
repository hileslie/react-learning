import React, { Component } from 'react';

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