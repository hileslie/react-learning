import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {
                    cid: 1,
                    title: '111'
                },
                {
                    cid: 2,
                    title: '222'
                },
                {
                    cid: 3,
                    title: '333'
                }
            ]
         }
    }
    render() { 
        return ( 
            <Fragment>
                <div>leslie - {this.state.id}</div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/'+item.cid}>
                                        {item.cid} -- {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
         );
    }

    componentDidMount() {
        let tempId = this.props.match.params.id
        console.log(tempId)
        this.setState({
            id: tempId
        })
    }
}
 
export default List;