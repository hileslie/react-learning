const defaultState = {
    inputVal: 'leslie',
    list: []
}

export default (state = defaultState, action) => {

    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        console.log(newState.list)
        newState.inputVal = ''
        return newState
    }

    return state
}