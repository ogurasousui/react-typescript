// stateのinterfaceはいらないかも

export const visibilityFilter = (state = 'SHOW_ALL', action: any) => {

    console.log('**** reducer visibilityFilter ****', state, action);

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
