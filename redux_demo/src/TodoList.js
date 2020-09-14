import React, { Component } from 'react';
import {connect} from 'react-redux'

const TodoList = (props) => {
    let {inputVal, inputChange, add, list} = props
        return ( 
            <div>
                <div>
                    <input
                        value={inputVal}
                        onChange={inputChange}/>
                    <button
                        onClick={add}
                    >提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
}

// class TodoList extends Component {
//     render() { 
//         let {inputVal, inputChange, add, list} = this.props
//         return ( 
//             <div>
//                 <div>
//                     <input
//                         value={inputVal}
//                         onChange={inputChange}/>
//                     <button
//                         onClick={add}
//                     >提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return (<li key={index}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
// }

const stateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
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
        },

        add() {
            let action = {
                type: 'addItem',
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);