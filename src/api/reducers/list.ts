export const list = (state: any = {list: []}, action: any) => {
    console.log('list reducer', state, action)
    switch (action.type) {
        case 'GET_LIST':
            return {
                list: ['aaaa']
            }
            // return fetch('http://localhost:3000/api/list').then((response) => {
            //     return response.json()
            // }).then((data) => {
            //     Promise.resolve({
            //         list: data
            //     })
            //
            // })
        default:
            return state
    }
}

