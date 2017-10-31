export const reducerDetail = (state: any = {}, action: any) => {
    console.log('detail reducer', state, action)
    switch (action.type) {
        case 'GET_DETAIL':
            return {detail: action.detail}
        default:
            return state
    }
}