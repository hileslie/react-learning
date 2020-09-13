import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM} from './actionTypes'
const defaultState = {
    inputVal: 'write',
    list: ['1', '2', '3', '4', '5']
}
export default (state = defaultState, action) => {

    // Reducer里只能接受state，不能改变state

    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        return newState
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}