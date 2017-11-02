export const reducerHead = (state: any = {drawerOpen: false}, action: any) => {
    console.log('||||||||| head reducer', state, action)
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {drawerOpen: !state.drawerOpen}

        default:
            return state
    }
}