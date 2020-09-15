// import React, { Component } from 'react';

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>数组 {this.state.count} </p>
//                 <button onClick={this.add}>增加</button>
//             </div>
//          );
//     }

//     add() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }
 
// export default Example;

import React, { useState } from 'react';

function Example() {
    const [ count, setCount] = useState(0)
    return (
        <div>
            <p>数组 {count} </p>
            <button onClick={() => {setCount(count + 1)}}>增加</button>
        </div>
    )
}

export default Example;