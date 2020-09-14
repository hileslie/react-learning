import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <input
                        value={this.props.inputVal}
                        onChange={this.props.inputChange}/>
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

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'changeInput',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);