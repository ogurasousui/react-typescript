export const reducerList = (state: any = {list: []}, action: any) => {
    console.log('list reducer', state, action)
    switch (action.type) {
        case 'GET_LIST':
            return {list: action.list}

        default:
            return state
    }
}