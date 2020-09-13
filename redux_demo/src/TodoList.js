import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/index'
import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} from './store/actionTypes'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInput = this.changeInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.add = this.add.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Input
                        placeholder={this.state.inputVal}
                        style={{width: '250px', margin: '10px'}}
                        onChange={this.changeInput}
                        value={this.state.inputVal}
                    />
                    <Button type="primary" onClick={this.add}>增加</Button>
                </div>
                <div style={{width: '250px', margin: '10px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.del.bind(this, index)}>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
         );
    }

    changeInput(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    add () {
        const action = {
            type: ADD_ITEM,
        }
        store.dispatch(action)
    }

    del(index) {
        const action = {
            type: DEL_ITEM,
            index
        }
        store.dispatch(action)
    }
}
 

export default TodoList;