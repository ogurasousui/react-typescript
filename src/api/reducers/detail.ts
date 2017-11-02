export const reducerDetail = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {detail: action.detail}
        default:
            return state
    }
}