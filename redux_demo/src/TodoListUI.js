import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

class TodoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Input
                        placeholder={this.props.inputVal}
                        style={{width: '250px', margin: '10px'}}
                        onChange={this.props.changeInput}
                        value={this.props.inputVal}
                    />
                    <Button type="primary" onClick={this.props.add}>增加</Button>
                </div>
                <div style={{width: '250px', margin: '10px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => this.props.del(index)}>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
         );
    }
}
 
export default TodoListUI;