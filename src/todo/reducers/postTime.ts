export const postTime = (state = {time: 'aaa'}, action: any) => {

    console.log('**** reducer postTime ****', state, action);

    switch (action.type) {
        case 'ADD_TODO':
            return {setTime: action.text}
        default:
            return state
    }
}