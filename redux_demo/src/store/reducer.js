const defaultState = {
    inputVal: 'write',
    list: ['1', '2', '3', '4', '5']
}
export default (state = defaultState, action) => {

    // Reducer里只能接受state，不能改变state

    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        return newState
    }

    if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}