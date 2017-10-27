export const detail = (state: any = {}, action: any) => {
    console.log('detail reducer', state, action)
    switch (action.type) {
        case 'GET_DETAIL':
            return state
        default:
            return state
    }
}