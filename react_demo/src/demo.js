import React, {Component, Fragment} from 'react'
import './style.css'
import Item from './item'
import axios from 'axios'
import Animation from './animation'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ['hello','leslie']
        }
        this.inputChange = this.inputChange.bind(this)
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount - 组件将要挂载页面的时刻')
    // }

    componentDidMount() {
        // console.log('componentDidMount - 组件挂载完成')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then(res => {
                console.log('res: ', res)
            })
    }

    // shouldComponentUpdate() {
    //     console.log('1 >>> shouldComponentUpdate')
    //     return true
    // }

    // UNSAFE_componentWillUpdate() {
    //     console.log('2 >>> componentWillUpdate')
    // }

    // componentDidUpdate() {
    //     console.log('4 >>> componentDidUpdate')
    // }

    render () {
        // console.log('3 >>> render - 组件挂载中')
        return (
            <Fragment>
                <input
                    ref={(input) => {this.input = input}}
                    value={this.state.inputVal} onChange={this.inputChange} />
                <button onClick={this.add.bind(this)}>增加</button>
                <ul className="bg">
                    <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={2000}   
                                    classNames="leslie-text"
                                    unmountOnExit
                                    appear={true}
                                    key={index+item}
                                >
                                <Item
                                    name="leslie"
                                    content={item}
                                    index={index}
                                    delItem={this.del.bind(this)}
                                    key={index+item}/>
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <Animation />
            </Fragment>
        )
    }

    inputChange(e) {
        this.setState({
            // inputVal: e.target.value
            inputVal: this.input.value
        })
    }
    add() {
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        })
    }
    del(index) {
        let list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list,
        })
    }
}

export default Demo