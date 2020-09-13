import React, {Component, Fragment} from 'react'
import './style.css'
import Item from './item'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ['hello','leslie']
        }
        this.inputChange = this.inputChange.bind(this)
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount - 组件将要挂载页面的时刻')
    }

    componentDidMount() {
        console.log('componentDidMount - 组件挂载完成')
    }

    shouldComponentUpdate() {
        console.log('1 >>> shouldComponentUpdate')
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('2 >>> componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('4 >>> componentDidUpdate')
    }

    render () {
        console.log('3 >>> render - 组件挂载中')
        return (
            <Fragment>
                <input
                    ref={(input) => {this.input = input}}
                    value={this.state.inputVal} onChange={this.inputChange} />
                <button onClick={this.add.bind(this)}>增加</button>
                <ul className="bg">
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Item
                                    name="leslie"
                                    content={item}
                                    index={index}
                                    delItem={this.del.bind(this)}
                                    key={index+item}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value)
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