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

    return state
}