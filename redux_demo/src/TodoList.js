import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.props.inputVal}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
         );
    }
}

const stateToProps = (state) => {
    return {
        inputVal: state.inputVal
    }
}
 
export default connect(stateToProps, null)(TodoList);