import React, { Component } from 'react';
import store from './store/index'
import {changeInputAction, addItemAction, delItemAction, getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInput = this.changeInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.add = this.add.bind(this)
        this.del = this.del.bind(this)
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    render() { 
        return ( 
            <TodoListUI
                inputVal={this.state.inputVal}
                list={this.state.list}
                changeInput={this.changeInput}
                add={this.add}
                del={this.del}
            ></TodoListUI>
         );
    }

    changeInput(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    add () {
        const action = addItemAction()
        store.dispatch(action)
    }

    del(index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
}
 

export default TodoList;