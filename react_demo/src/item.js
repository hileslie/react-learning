import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props)
    }

    // 组件第一次存在于dom中，函数不会被执行
    // 如果已经存在于dom中，函数才会被执行
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('child >>> componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     console.log('child >>> componentWillUnmount')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        }
        return false
    }

    render() {
        console.log(123)
        return ( 
            <li>
                {this.props.name} - {this.props.age} - {this.props.content}
                <button onClick={() => this.handelClick()}>删除</button>
            </li>
        );
    }
    handelClick() {
        this.props.delItem(this.props.index)
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func
}

Item.defaultProps = {
    age: '18'
}

export default Item