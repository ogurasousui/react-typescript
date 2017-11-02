export const reducerHead = (state: any = {drawerOpen: false, list: []}, action: any) => {
    console.log('||||||||| head reducer', state, action)
    switch (action.type) {
        case 'TOGGLE_MENU':
            console.log('TOGGLE_MENU');
            return {
                drawerOpen: !state.drawerOpen,
                list: state.list
            }

        case 'GET_MENU':
            console.log('GET_MENU');
            return {
                drawerOpen: state.drawerOpen,
                list: action.list
            }

        default:
            console.log('DEFAULT');
            return state
    }
}