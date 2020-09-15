import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.add = this.add.bind(this)
    }

    componentDidMount() {
        console.log(`componentDidMount => ${this.state.count}`)
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate => ${this.state.count}`)
    }

    render() { 
        return ( 
            <div>
                <p>数组 {this.state.count} </p>
                <button onClick={this.add}>增加</button>
            </div>
         );
    }

    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
 
export default Example;
