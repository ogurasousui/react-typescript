export const reducerList = (state: any = {list: []}, action: any) => {
    switch (action.type) {
        case 'GET_LIST':
            return {list: action.list}

        default:
            return state
    }
}