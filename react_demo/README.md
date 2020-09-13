# React Demo

## React16
- react bind this 原因
- 解决 react bind this 的3中方法
- [...xxx] ES6拓展运算符运用
- setState 异步更新DOM
- react列表渲染 key值原理
- 性能问题 不能直接对 this.state.list 进行切割使用等
- 开发便捷操作 VSC 拓展插件 Simple React Snippets
- 父子组件拆分 及 如何传值 及 传值校验`prop-types`
- 单向数据流
- react+jq如何结合使用
- 什么是函数式编程
- react生命周期：initialization =》 mounting =》 updation =》 unmounting
    - 初始化阶段：initialization =》 props state
    - DOM挂载阶段：mounting =》 componentWillMount render componentDidMount
    - 组件更新阶段：props states
        - props：componentWillReceiveProps shouldComponentUpdate componentWillUpdate render 
        - states：shouldComponentUpdate componentWillUpdate render componentDidUpdate
        ```
            1 >>> shouldComponentUpdate
            2 >>> componentWillUpdate
            3 >>> render - 组件挂载中
            child >>> componentWillReceiveProps
            4 >>> componentDidUpdate
        ```
    - 卸载阶段：componentWillUnmount
        ```
        1 >>> shouldComponentUpdate
        2 >>> componentWillUpdate
        3 >>> render - 组件挂载中
        child >>> componentWillReceiveProps
        child >>> componentWillUnmount
        4 >>> componentDidUpdate
        ```
- 如何利用生命周期，提升组件性能
    - 子组件使用 `shouldComponentUpdate`
    ```
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        }
        return false
    }
    ```
- easymock
- 动画组件库 react-transition-group